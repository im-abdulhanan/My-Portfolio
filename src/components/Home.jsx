import { Header } from "./Header"
import "../css components/Home.css"
import { useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
// tech stack icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";



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
        <div className="mainDiv h-[250vh] flex flex-col ">
          <div className=" w-full h-[120vh] sm:h-[125vh] md:h-[120vh] flex flex-col justify-between items-center gap-10 ">
              <div className=" w-full   sm:w-[90%] md:w-[70%] h-[80vh] pl-10 flex flex-col sm:gap-5 sm:pt-0">
                <img src="src/assets/me.png" width={200} alt="" className="sm:self-center " />
                <h1 className="text-[350%] sm:text-[400%] font-semibold  name text-gray-500">Hola! i'm <span className="name my-name">ABDUL HANAN</span></h1>
                <div className="flex items-center"><h2 className="sm:text-[250%] text-[150%] text-gray-400">I make your website</h2>
                <span ref={nameChanger} className="animation relative pl-2 text-gray-400 text-[150%] sm:text-[250%]">test</span></div>
                <p className="text-[150%] summary text-gray-400 w-full sm:w-[95%]">
                  Creative web developer specializing in fast, clean, and high-converting websites that turn visitors into customers.
                </p>
                 <a href="mailto:imhanan.mail@gmail.com" className="flex self-center">
              <button  className=" text-amber-50 flex items-center cursor-pointer border px-10 py-2 gap-2 btn-connect hover:bg-white hover:text-black">Let's Connect <FaTelegramPlane /></button>
              </a>
              <p className="flex items-center gap-2 self-center text-white"><div className="w-[12px] h-[12px] bg-green-500 rounded-4xl green-div"></div>Available for work !</p>
              </div>
             
              <div className="">
                <img src="src/assets/spac.png" width={200} alt="" className="autoScroll"/>
              </div>
          </div>
          <div className="w-full  flex flex-col items-center ">
            <div className="teach-div">
              <h1 className="teach-title text-[200%] sm:text-[400%] text-gray-500">Tech Stack</h1>
            </div>
            <div className="w-[80%] sm:w-[50%] h-[50vh]  ">
              <ul className="flex flex-wrap gap-4 justify-center ">
                <li className="icon"><FaHtml5 className="html " />HTML</li>
                <li className="icon"><FaCss3Alt className="css " />CSS</li>
                <li className="icon"><FaBootstrap className="boot " />Bootstrap</li>
                <li className="icon"><FaJsSquare className="js " />JavaScript</li>
                <li className="icon"><RiTailwindCssFill className="tailwind " />Tailwind CSS</li>
                <li className="icon"><FaReact className="react " />React</li>
                <li className="icon"><FaGitAlt className="git " />Git</li>
                <li className="icon"><FaGithub className="github " />GitHub</li>
                <li className="icon"><FaPython className="py " />Python</li>
                <li className="icon"><SiMysql className="sql " /></li>
                <li className="icon"><FcLinux className="linux " />Linux</li>
                <li className="icon"><VscVscode className="vs-code " />VS code</li>
                <li className="icon"><IoLogoVercel className="vercel " />Vercel</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
