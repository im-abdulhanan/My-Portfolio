import { Header } from "./Header"
import "../css components/Home.css"
import { useRef, useState } from "react";
export const Home = () => {
  // const animationNames = ["cute","animated","fast","smooth","modren"];
  const nameChanger =  useRef(null)
  const text = ()=>{
    setTimeout(()=>{
      nameChanger.current.textContent = "cute"
    },4000)
    setTimeout(()=>{
      nameChanger.current.textContent = "animated"
    },8000)
    setTimeout(()=>{
      nameChanger.current.textContent = "fast"
    },12000)
    setTimeout(()=>{
      nameChanger.current.textContent = "smooth"
    },16000)
    setTimeout(()=>{
      nameChanger.current.textContent = "modren"
    },20000)
  }
  setInterval(text,24000)
  text();
  
  return (
    <div className="w-full h-screen ">
         <Header />
         <div className="mainDiv h-[200vh]">
          <div className="w-full h-screen flex flex-col sm:flex-row ">
            <div className="my-description w-full sm:w-[60%]  h-[80vh]">
              <div className="w-full h-[80vh] pl-10 flex flex-col gap-5 pt-20 sm:pt-0">
                <h1 className="text-[350%] sm:text-[400%] font-semibold  name text-gray-600">Hola! i'm <span className="name my-name">ABDUL HANAN</span></h1>
                <h2 className="sm:text-[250%] text-[150%]  text-gray-400">I make your website<span ref={nameChanger}  className="animation relative pl-2">test</span></h2>
                <p className="text-[150%] summary text-gray-400 w-[100%]">
                  Creative web developer specializing in fast, clean, and high-converting websites that turn visitors into customers.
                </p>
              </div>
            <div className="my-pic w-full sm:hidden sm:w-[40%] h-[40vh] flex justify-center items-end">
              <img src="src/assets/me.png" alt="" className="w-[65%] " />
            </div>{/*img div*/}
            </div>
            <div className="hidden my-pic w-full sm:w-[40%] sm:flex h-[70vh] justify-center items-start">
              <img src="src/assets/me.png" alt="" className="w-3/4 " />
            </div>
          </div>
         </div>
    </div>
  )
}
