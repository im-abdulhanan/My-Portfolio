import { Header } from "./Header"
import "../css components/Home.css"
import { useRef, useState } from "react";
export const Home = () => {
  // const animationNames = ["cute","animated","fast","smooth","modren"];
  const nameChanger =  useRef(null)
  const text = ()=>{
    setTimeout(()=>{
      nameChanger.current.textContent = "cute"
    },3000)
    setTimeout(()=>{
      nameChanger.current.textContent = "animated"
    },6000)
    setTimeout(()=>{
      nameChanger.current.textContent = "fast"
    },9000)
    setTimeout(()=>{
      nameChanger.current.textContent = "smooth"
    },12000)
    setTimeout(()=>{
      nameChanger.current.textContent = "modren"
    },15000)
  }
  setInterval(text,18000)
  text();
  return (
    <div className="w-full h-screen ">
         <Header />
         <div className="mainDiv h-[200vh]">
          <div className="w-full h-screen bg-amber-50 flex flex-col sm:flex-row items-center">
            <div className="my-description w-full sm:w-[60%]  h-[70vh] bg-purple-600">
              <h1 className="text-[300%] sm:text-[400%] font-semibold  text-center font-semibold name">Hola! i'm <span className="name">ABDUL HANAN</span></h1>
              <h2 className="text-center">I make your website <span ref={nameChanger} className="animation absolute">test</span></h2>
            </div>
            <div className="my-pic w-full sm:w-[40%] h-[70vh] bg-pink-500 flex justify-center items-center">
              <img src="src/assets/me.png" alt="" className="w-3/4 rounded-[100%]" />
            </div>
          </div>
         </div>
    </div>
  )
}
