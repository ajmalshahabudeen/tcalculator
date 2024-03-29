"use client";
import { DisplayForm } from "@/components/Display/DisplayForm";
import { KeyboardKeys } from "@/components/Keyboard/KeyboardKeys";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [keypad, setKeypad] = useState(Number)
  const [display, setDisplay] = useState(Number)

  const handleNumber = (data: any) => {
    setKeypad(data)
    setDisplay(data)
    console.log(keypad)
  }
  return (
    <main className="flex flex-col">
      <DisplayForm passData={display}/>
      <KeyboardKeys handlePress={handleNumber}/>
    </main>
  );
}
