import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";

export const DisplayForm = ({ passData }: any) => {

  const [display, setDisplay] = useState(Number);

  useEffect(() => {
    setDisplay(passData);
  }, [passData]);
  
  return (
    <main>
      <Input
        className="w-full h-28 rounded-none border border-red-500 text-2xl font-bold font-mono"
        type="number"
        value={display ? display : ""}
        readOnly
      />
    </main>
  );
};
