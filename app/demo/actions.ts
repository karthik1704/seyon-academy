"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SERVER_API_URL } from "@/app/constants";

import { z } from "zod";

const schema = z
  .object({
    code: z.string().trim().toLowerCase().min(1, "Username Required"),
  })
  .required({ code: true });

type StateType = {
  message?: string ;
  fieldErrors?: {
    code?: string ;
  };
}

export async function demoLogin(prevState: StateType, formData: FormData) {

  const data = {
    code: formData.get('code'),
  }

  const validatedFields = schema.safeParse({
    code: formData.get('code'),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        code: validatedFields.error.flatten().fieldErrors.code?.join(","),
      },
    };
  }
 console.log(data)
  try {
    const res = await fetch(`${SERVER_API_URL}/auth/demo/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 401) {
      const error = await res.json();
      console.log(error);

      return {
        ...prevState,
        message: error?.detail,
        
      };
    }

    if(res.status !== 200){
      const error = await res.json();
      console.log(error);

      return {
        message: error.detail,
        fieldErrors: {
          code: undefined,
        },
      };
    }

    if (res.status === 200) {
      const resJson = await res.json();
      console.log(resJson);
      const now = new Date();
      now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);
      (await cookies()).set("access", resJson.access_token, { expires: now });
    }
  } catch (e) {
    console.log(e);
  }

  redirect("/demo/learn");
}


export const logout = async () => {
  (await cookies()).delete("access");
  redirect("/demo");
}