"use client"

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { languageSetter } from "@/actions/toggle";

export default function RadioComponent(props:any) {
  const [value, setValue] = React.useState(props.lang || 'en');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    languageSetter(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="en" control={<Radio />} label="English" />
        <FormControlLabel value="it" control={<Radio />} label="Italian" />
      </RadioGroup>
    </FormControl>
  );
}
