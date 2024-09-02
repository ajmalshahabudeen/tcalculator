import { evaluate } from "mathjs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useKeyboardStore = create(
    persist(
        (set) => ({
            inputs: '',
            answer: '0',
            onClicks: (value: string) => {
                set((state:any) => ({ inputs: state.inputs + value }))
            },
            onBackspace: () => {
                set((state:any) => ({ inputs: state.inputs.slice(0, -1) }))
            },
            onEqualsTo: () => {
                set((state:any) => ({ answer: evaluate(state.inputs) }))
            },
            onClear: () => {
                set((state:any) => ({ inputs: '', answer: '0' }))
            }
        }),
        {
            name: "keyboard",
            getStorage: () => sessionStorage,
        }
    )
)