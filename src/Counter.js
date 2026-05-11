import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  ft: 0,
  cm: 0,

  inc: () =>
    set((state) => ({ count: state.count + 1 })),

  setFt: (value) =>
    set({ ft: value }),

  setCm: (value) =>
    set({ cm: value }),

  calculateCm: () =>
    set((state) => ({
      cm: state.ft * 30.48,
    })),

  calculateFt: () =>
    set((state) => ({
      ft: state.cm / 30.48,
    })),
}))

export default function Counter() {
  const {
    cm,
    ft,
    calculateCm,
    calculateFt,
    setCm,
    setFt,
  } = useStore()

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 bg-[#8A5F41]'>
      <h1 className='text-3xl font-bold text-white'>Feet to Centimeters Converter</h1>
      <div className='flex flex-row gap-2'> 
       <div className='items-center justify-center flex flex-col'>  <div className='text-white'>Centimeters:</div></div>
        <input
          type="number"
          name="cm"
          className='border  border-black p-3 rounded-lg'
          value={cm}
          onChange={(e) =>
            setCm(Number(e.target.value))
          }
        />
      </div>

  

      <div className='flex flex-row gap-2'> 
       <div className='items-center justify-center flex flex-row text-white'>  Feet:</div>
        <input
          type="number"
          name="ft"
          className='border  border-black p-3 rounded-lg'
          value={ft}
          onChange={(e) =>
            setFt(Number(e.target.value))
          }
        />
      </div>
<div className='items-center justify-center flex flex-row gap-4'> 
      <button className='bg-[#F3E4C9] text-gray p-3 rounded-lg' onClick={calculateCm}>
        Calculate CM
      </button>

      <button className='bg-[#F3E4C9] text-gray p-3 rounded-lg' onClick={calculateFt}>
        Calculate FT
      </button>
      </div>
    </div>
  )
}