// import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'it'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)){
    console.log("Not found active...")
    // notFound();
  } 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});