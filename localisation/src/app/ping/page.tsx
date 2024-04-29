'use client'
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  console.log("t", t('title'))
  return <h1>
    pinhggg
    {t('title')}
  </h1>;
}