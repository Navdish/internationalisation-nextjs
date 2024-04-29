"use server"

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {unstable_setRequestLocale} from 'next-intl/server';
// export default createMiddleware({
//   locales: ['en', 'it'],
//   defaultLocale: 'en'
// });


export async function middleware(req: NextRequest) {
  // console.log('req: ', req);
  const cookieStore = cookies();
  const language = cookieStore.get('NEXT_LOCALE')?.value || 'en'
  // unstable_setRequestLocale(language);
  // console.log('res: ', res);
  NextResponse.next();
  // res.next()
}
 
export const config = {
  matcher: ['/', '/(it|en)/:path*']
};