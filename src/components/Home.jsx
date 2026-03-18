import { Header } from "./Header"
import "../css components/Home.css"
import { useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
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
        <div className="mainDiv h-[200vh] flex flex-col">
          <div className="w-full h-[60vh]  flex flex-col items-center gap-5">
              <div className=" w-full   sm:w-[60%] h-[80vh] pl-10 flex flex-col sm: gap-5 pt-20 sm:pt-0">
                <h1 className="text-[350%] sm:text-[400%] font-semibold  name text-gray-600">Hola! i'm <span className="name my-name">ABDUL HANAN</span></h1>
                <div className="flex items-center"><h2 className="sm:text-[250%] text-[150%] text-gray-400">I make your website</h2>
                <span ref={nameChanger} className="animation relative pl-2 text-gray-400 text-[150%] sm:text-[250%]">test</span></div>
                <p className="text-[150%] summary text-gray-400 w-full sm:w-[90%]">
                  Creative web developer specializing in fast, clean, and high-converting websites that turn visitors into customers.
                </p>
              </div>
              <a href="mailto:imhanan.mail@gmail.com">
              <button  className="text-amber-50 flex items-center cursor-pointer border px-10 py-2 gap-2 btn-connect hover:bg-white hover:text-black">Let's Connect <FaTelegramPlane /></button>
              </a>
              <p className="flex items-center gap-2 text-white"><div className="w-[15px] h-[15px] bg-green-500 rounded-4xl green-div"></div>Available for work</p>
          </div>
          <div className="bg-amber-100 w-full h-[70vh]">
          </div>
        </div>
    </div>
  )
}
