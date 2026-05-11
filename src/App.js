import React from "react";
import Counter from "./Counter";
import RopaniBigha from "./RopaniBigha";
import Anatohaat from "./Anatohaat";
import Menu from "./Menu";
import './App.css';
function App() {

  return (
    <div>
      <Menu/>
      <section id="ft-to-cm">
       <Counter />
       </section>
       <section id="ropani-bigha">
         <RopaniBigha />
    
     </section>
     
    
 <section id="ana-to-haat">
     <Anatohaat />
     </section>
    <section id="footer">
      <div className="bg-[#8A5F41] p-4 flex flex-row items-center justify-center fixed w-full bottom-0 z-10 shadow-md">
        <h1 className="text-sm font-bold text-white">Made with ❤️ by Asim Ghimire</h1>
      </div>  
    </section>
    </div>
  )
}

export default App