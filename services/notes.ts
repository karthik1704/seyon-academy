'use server';

import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getNotesFolders = async () => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/students');
    }

    const response = await fetch(`${SERVER_API_URL}/notes/student/folders/`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access.value}`
        }
    });

    if (response.status === 401) {
        redirect('/students');
    }

    if (response.status !== 200) {
        console.error('Failed to fetch notes folder');
        const error = await response.json();
        console.error(error);
        console.error(error.detail[0]);
        throw new Error('Failed to fetch notes folder');
    }

    const notesFolder = await response.json();
    // console.log(notesFolder);
    return notesFolder;
};

export const getNotes = async () => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/students');
    }

    const response = await fetch(`${SERVER_API_URL}/notes/student/`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access.value}`
        }
    });

    if (response.status === 401) {
        redirect('/students');
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

export const getNotesByFolder = async (id:string) => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/students');
    }

    const response = await fetch(`${SERVER_API_URL}/notes/student/folders/${id}`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access.value}`
        }
    });

    if (response.status === 401) {
        redirect('/students');
    }

    if (response.status !== 200) {
        console.error('Failed to fetch notes');
        const error = await response.json();
        console.error(error);
        console.error(error.detail[0]);
        throw new Error('Failed to fetch notes');
    }

    const notes = await response.json();
    console.log(notes);
    return notes;

}; 