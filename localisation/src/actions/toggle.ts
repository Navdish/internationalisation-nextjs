"use server"
import { cookies } from "next/headers";

export async function languageSetter(props:any) {
    cookies().set('NEXT_LOCALE', props)
}