'use server';

import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getCurrentStudent = async ()=>{
    const access = (await cookies()).get("access");

    if(!access) redirect("/students");

    const res = await fetch(`${SERVER_API_URL}/students/me/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access.value}`
        }
    });

    if(res.status === 401) redirect("/students");

    if (res.status !== 200){
        console.log(res.status);
        const error = await res.json();
        console.log(error);
        console.log(error.detail[0]);
        throw new Error(error.detail[0]);
    }

    const student = await res.json();

    return student;
}