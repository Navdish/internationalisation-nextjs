import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'it'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(it|en)/:path*']
};