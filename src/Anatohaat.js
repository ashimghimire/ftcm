import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  ana: 0,
  haat: 0,
  lhaat:0,
  bhaat:0,
  inc: () =>
    set((state) => ({ count: state.count + 1 })),

  setAna: (value) =>
    set({ ana: value }),

  setLhaat: (value) =>
    set({ lhaat: value }),

  setBhaat: (value) =>
    set({ bhaat: value }),

  setHaat: (value) =>
    set({ haat: value }),

  calculateHaat: () =>
    set((state) => ({
      haat: state.ana * 15.07,
      lhaat: state.ana * 15.07,
      bhaat: state.ana * 15.07,
    })),

  calculateAna: () =>
    set((state) => ({
      ana: state.lhaat * state.bhaat / (15.07 * 15.07 ),
    })),
}))

export default function Counter() {
  const {
    ana,
    haat,
    lhaat,
    bhaat,
    setLhaat,
    setBhaat,
    calculateHaat,
    calculateAna,
    setHaat,
    setAna,
  } = useStore()

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 bg-[#8A5F41]'>
      <h1 className='text-3xl font-bold text-white'>Ana to Haat Converter</h1>
      <div className='flex flex-row gap-2'> 
       <div className='items-center justify-center flex flex-col'>  <div className='text-white'>Ana:</div></div>
        <input
          type="number"
          name="ana"
          className='border  border-black p-3 rounded-lg'
          value={ana}
          onChange={(e) =>
            setAna(Number(e.target.value))
          }
        />
      </div>

  

      <div className='flex flex-row gap-2'> 
       <div className='items-center justify-center flex flex-row text-white'>  Haat:</div>
        {/* <input
          type="number"
          name="haat"
          className='border  border-black p-3 rounded-lg'
          value={haat}
          onChange={(e) =>
            setHaat(Number(e.target.value))
          }
        /> */}
         <input
          type="number"
          name="lhaat"
          className='border  border-black p-3 rounded-lg'
          value={lhaat}
          onChange={(e) =>
            setLhaat(Number(e.target.value))
          }
        />
        <div className='flex flex-row items-center justify-center'>BY</div>
         <input
          type="number"
          name="bhaat"
          className='border  border-black p-3 rounded-lg'
          value={bhaat}
          onChange={(e) =>
            setBhaat(Number(e.target.value))
          }
        />
      </div>
<div className='items-center justify-center flex flex-row gap-4'> 
      <button className='bg-[#F3E4C9] text-gray p-3 rounded-lg' onClick={calculateHaat}>
        Calculate Haat
      </button>

      <button className='bg-[#F3E4C9] text-gray p-3 rounded-lg' onClick={calculateAna}>
        Calculate Ana
      </button>
      </div>
    </div>
  )
}