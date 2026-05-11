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
      <section id="advertise" className="mt-20 flex items-center justify-center">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnepalicongresshq%2Fposts%2Fpfbid02ZpXqqynmKJKeymkVdoAfdLMV3BttTZDCymou62unqyJ7x8JxZhCAHcPtjGRzNaN4l&show_text=true&width=500" width="500" height="680" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </section>
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