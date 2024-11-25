"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { URLSearchParams } from "url";
import { SERVER_API_URL } from "@/app/constants";

import { z } from "zod";

const schema = z
  .object({
    username: z.string().trim().toLowerCase().min(1, "Username Required"),
    password: z.string().trim().min(1, "Password Required"),
  })
  .required({ username: true, password: true });

type StateType = {
  message?: string ;
  fieldErrors?: {
    username?: string ;
    password?: string ;
  };
}

export async function signinJwt(prevState: StateType, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const validatedFields = schema.safeParse({
    username: username,
    password: password,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      
      fieldErrors: {
        username: validatedFields.error.flatten().fieldErrors.username?.join(","),
        password: validatedFields.error.flatten().fieldErrors.password?.join(","),
      },
    };
  }
  const params = new URLSearchParams();
  params.append("username", username as string);
  params.append("password", password as string);
  params.append("grant_type", "password");
  params.append("client_id", "");
  params.append("client_secret", "");

  try {
    const res = await fetch(`${SERVER_API_URL}/auth/student/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
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
        ...prevState,
        message: JSON.stringify(error?.detail),
        fieldErrors: {
          username: undefined,
          password: undefined,
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

  redirect("/students/dashboard");
}


export const logout = async () => {
  (await cookies()).delete("access");
  redirect("/students");
}