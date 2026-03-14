import { useState } from "react"
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
export const Header = () => {
  const menuNames = ["HOME","ABOUT","PROJECTS","CONTACT"]
  const [bgColor ,setBgColor] = useState("HOME")
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-black">
      <div className="hidden sm:flex w-full h-35">
        <div className="w-full h-[100%]  flex items-center justify-center">
           <ul className="hidden sm:flex justify-around items-center sm:w-1/2  lg:w-1/3 h-15  rounded-4xl  bg-white/10 backdrop-blur-3xl">
            {menuNames.map((item)=>(
            <li key={item} className={`sm:px-4 sm:py-2 px-6 py-2 rounded-4xl
              ${bgColor === item ? "bg-white text-black" : "hover:bg-white/5 text-white"}
              `}
              onClick={()=>setBgColor(item)}            
            >{item}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="flex justify-between px-5 items-center h-20 bg-black sm:hidden">
        <h1 className="text-white text-3xl">AH</h1>
        <h3 onClick={()=>setOpen(!open)} className="text-3xl">{open ? <IoMdClose className="text-white" />  : <FiAlignJustify className="text-white"/>}</h3 >
      </div>
      <div className={`${open ? "flex" : "hidden"} flex-col items-center justify-around sm:hidden h-screen`}>
        <ul className="flex flex-col justify-around items-center w-[50%]  h-[60%] ">
            {menuNames.map((item)=>(
            <li key={item} className={`sm:px-4 sm:py-2 px-6 py-2 rounded-4xl
              ${bgColor === item ? "bg-white text-black" : "hover:bg-white/5 text-white"}
              `}
              onClick={()=>setBgColor(item)}            
            >{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
