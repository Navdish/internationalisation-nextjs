// 'use client'
import { Box } from "@mui/material";
import { getDictionary } from "../../dictionaries";
import { cookies } from "next/headers";
import RadioComponent from "@/components/RadioComponent";

export default async function Index() {
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const dict = await getDictionary(lang);
  return (
  <Box sx={{display:"flex", justifyContent:"space-between", p:"20px"}}>
    {dict.Index.title}
    <RadioComponent lang = {lang}/>
  </Box>
  );
}
