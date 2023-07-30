"use client";

import FormDialog from "./FormDialog";
import Output from "./Output";
import { CenterElement } from "./customComponent";

export default function Todos() {
  return (
    <CenterElement sx={{ flexDirection: "column" }}>
      <FormDialog />
      <Output />
    </CenterElement>
  );
}
