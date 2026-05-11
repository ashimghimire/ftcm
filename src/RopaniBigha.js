import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  ropani: 0,
  bigha: 0,

  inc: () =>
    set((state) => ({ count: state.count + 1 })),

  setRopani: (value) =>
    set({ ropani: value }),

  setBigha: (value) =>
    set({ bigha: value }),

  calculateBigha: () =>
    set((state) => ({
      bigha: state.ropani / 13,
    })),

  calculateRopani: () =>
    set((state) => ({
      ropani: state.bigha * 13,
    })),
}))

export default function Counter() {
  const {
    bigha,
    ropani,
    calculateBigha,
    calculateRopani,
    setBigha,
    setRopani,
  } = useStore()

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 bg-[#8A5F41]'>
      <h1 className='text-3xl font-bold text-white'>Ropani to Bigha Converter</h1>
      <div className='flex flex-row gap-2'> 
       <div className='items-center justify-center flex flex-col'>  <div className='text-white'>Ropani:</div></div>
        <input
          type="number"
          name="ropani"
          className='border  border-black p-3 rounded-lg'
          value={ropani}
          onChange={(e) =>
            setRopani(Number(e.target.value))
          }
        />
      </div>

  

      <div className='flex flex-row gap-2'> 
       <div className='items-center justify-center flex flex-row text-white'>  Bigha:</div>
        <input
          type="number"
          name="bigha"
          className='border  border-black p-3 rounded-lg'
          value={bigha}
          onChange={(e) =>
            setBigha(Number(e.target.value))
          }
        />
      </div>
<div className='items-center justify-center flex flex-row gap-4'> 
      <button className='bg-[#F3E4C9] text-gray p-3 rounded-lg' onClick={calculateBigha}>
        Calculate Bigha
      </button>

      <button className='bg-[#F3E4C9] text-gray p-3 rounded-lg' onClick={calculateRopani}>
        Calculate Ropani
      </button>
      </div>
    </div>
  )
}