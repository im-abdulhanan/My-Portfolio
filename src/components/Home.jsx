import { Header } from "./Header"
import "../css components/Home.css"
import { useRef } from "react";
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
    <div className="">
      
        <div className="mainDiv h-[135vh] sm:h-[120vh] flex flex-col items-center justify-between">
              <div className=" w-full sm:w-[90%] md:w-[70%] h-[80vh] pl-10 flex flex-col gap-5 sm:gap-5 sm:pt-0">
                  <img src="/me.png" width={200} alt="" className="sm:self-center " />
                  <h1 className="text-[350%] sm:text-[400%] font-semibold  name text-gray-500">Hola! i'm <span className="name my-name">ABDUL HANAN</span></h1>
                  <div className="flex items-center"><h2 className="sm:text-[250%] text-[150%] text-gray-400">I make your website</h2>
                  <span ref={nameChanger} className="animation relative pl-2 text-gray-400 text-[150%] sm:text-[250%]">test</span></div>
                  <p className="text-[150%] summary text-gray-400 w-full sm:w-[95%]">
                    Creative web developer specializing in fast, clean, and high-converting websites that turn visitors into customers.
                  </p>
                  <a href="mailto:imhanan.mail@gmail.com" className="flex self-center">
                    <button  className=" text-amber-50 flex items-center  border px-10 py-2 gap-2 btn-connect hover:bg-white hover:text-black">Let's Connect <FaTelegramPlane /></button>
                   </a>
                  <p className="flex items-center gap-2 self-center text-white"><div className="w-[12px] h-[12px] bg-green-500 rounded-4xl green-div"></div>Available for work !</p>
              </div>
              <div className="">
                <img src="src/assets/spac.png" width={200} alt="" className="autoScroll"/>
              </div>
        </div>
    </div>
  )
}
