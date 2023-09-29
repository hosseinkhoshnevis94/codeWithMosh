import { create } from "zustand";

interface CounterStore{
    counter:number,
    increase: () => void,
    decrease: () => void,
    reset: () => void
}

const useCounterStore = create<CounterStore>((set) => ({
    counter:10,
    increase: () =>set((state) => ({counter:state.counter +1 })),
    decrease: () =>set((state) => ({counter:state.counter -1 })),
    reset: () =>set(() => ({counter:0 })),
}))

export default useCounterStore