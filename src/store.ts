import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

type MessageStore = {
    message: string;
    firstChange: () => void;
    secondChange: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

export const useMessageStore = create<MessageStore>((set) => ({
    message: "salam",
    firstChange: () => {
        set({ message: "ualeikum" })
    },
    secondChange: () => {
        set({ message: "salam" })
    }
}))