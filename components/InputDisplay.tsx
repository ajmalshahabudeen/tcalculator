"use client";
import React from "react";
import { Input } from "./ui/input";
import { useKeyboardStore } from "@/hooks/useKeyboard";

export const InputDisplay = () => {
  const InputValue = useKeyboardStore((state: any) => state.inputs);
  const Answer = useKeyboardStore((state: any) => state.answer);
  return (
    <div className="p-5">
      <Input
        type="text"
        placeholder="0000.00"
        value={InputValue}
        className="h-20 border-4 text-3xl border-slate-950"
      />
      <p className="text-3xl text-end pt-4 pr-5"><span className="text-lg">Result:</span> {Answer}</p>
    </div>
  );
};
