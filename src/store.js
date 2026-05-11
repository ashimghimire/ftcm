import { create } from 'zustand'

const useStore = create((set) => ({
  ft: 0,
  cm: 0,
  count: 0,
  setFt: (value) => set({ ft: value }),
  setCm: (value) => set({ cm: value }),
  calculateCm: () => set((state) => ({ cm: state.ft * 30.48 })),
  calculateFt: () => set((state) => ({ ft: state.cm / 30.48 })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useStore;