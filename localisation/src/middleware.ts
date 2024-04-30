"use server"

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {unstable_setRequestLocale} from 'next-intl/server';


export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const language = cookieStore.get('NEXT_LOCALE')?.value || 'en'
  // unstable_setRequestLocale(language);
  NextResponse.next();
}
 
export const config = {
  matcher: ['/', '/(it|en)/:path*']
};