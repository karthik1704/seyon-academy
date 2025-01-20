'use server';

import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getDemoClasses = async () => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/demo');
    }

    const response = await fetch(`${SERVER_API_URL}/demo-classes/student/`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access.value}`
        }
    });

    if (response.status === 401) {
        redirect('/demo');
    }

    if (response.status !== 200) {
        console.error('Failed to fetch notes');
        const error = await response.json();
        console.error(error);
        console.error(error.detail[0]);
        throw new Error('Failed to fetch notes');
    }

    const demoClasses = await response.json();
    console.log(demoClasses);
    return demoClasses;

}; 
export const getDemoClass = async (id:string) => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/demo');
    }

    const response = await fetch(`${SERVER_API_URL}/demo-classes/student/${id}/`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access.value}`
        }
    });

    if (response.status === 401) {
        redirect('/demo');
    }

    if (response.status !== 200) {
        console.error('Failed to fetch notes');
        const error = await response.json();
        console.error(error);
        console.error(error.detail[0]);
        throw new Error('Failed to fetch notes');
    }

    const notes = await response.json();
    // console.log(notes);
    return notes;

}; 