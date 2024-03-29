import React, { useState } from 'react'
import { Button } from '../ui/button'

export const KeyboardKeys = ({handlePress}: any) => {
  const [keypad, setKeypad] = useState(Number)
  const handleClick = (data:any) => {
    setKeypad(data)
    handlePress(data)
    // console.log(keypad)
  }
  return (
    <main>
        <section className='grid grid-cols-3 border border-black'>
            <Button onClick={() => handleClick(1)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>1</Button>
            <Button onClick={() => handleClick(2)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>2</Button>
            <Button onClick={() => handleClick(3)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>3</Button>
            <Button onClick={() => handleClick(4)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>4</Button>
            <Button onClick={() => handleClick(5)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>5</Button>
            <Button onClick={() => handleClick(6)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>6</Button>
            <Button onClick={() => handleClick(7)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>7</Button>
            <Button onClick={() => handleClick(8)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>8</Button>
            <Button onClick={() => handleClick(9)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>9</Button>
            <Button onClick={() => handleClick(0)} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>0</Button>
            <Button onClick={() => handleClick('+')} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>+</Button>
            <Button onClick={() => handleClick('-')} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>-</Button>
            <Button onClick={() => handleClick('*')} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>*</Button>
            <Button onClick={() => handleClick('/')} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>/</Button>
            <Button onClick={() => handleClick('=')} className='flex justify-center items-center p-2 rounded-none h-28 text-3xl'>=</Button>
        </section>
    </main>
  )
}
