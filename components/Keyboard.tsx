import React from "react";
import { Button } from "./ui/button";
import { useKeyboardStore } from "@/hooks/useKeyboard";

export const Keyboard = () => {
  const onClicks = useKeyboardStore((state: any) => state.onClicks);
  const onBackspace = useKeyboardStore((state: any) => state.onBackspace);
  const onEqualsTo = useKeyboardStore((state: any) => state.onEqualsTo);
  const onClear = useKeyboardStore((state: any) => state.onClear);
  return (
    <div className="flex flex-wrap mt-10">
      {Object.entries(values).map(([key, value]) => (
        <Button
          onClick={() => onClicks(value)}
          className="rounded-none w-1/4 h-28 text-3xl"
          key={key}
        >
          {value}
        </Button>
      ))}
      <Button className="rounded-none w-1/4 h-28 text-3xl" onClick={onEqualsTo}>
        =
      </Button>
      <Button
        className="rounded-none w-1/2 h-28 text-3xl"
        onClick={onBackspace}
      >
        Backspace
      </Button>
      <Button
        className="rounded-none w-1/2 h-28 text-3xl"
        onClick={onClear}
      >
        Clear
      </Button>
    </div>
  );
};

const values = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0",
  ".": ".",
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
};
