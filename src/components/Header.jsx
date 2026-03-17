import { useState } from "react"
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "../css components/Header.css"
export const Header = () => {
  const menuNames = ["HOME","PROJECTS","EDUCATION","CONTACT"]
  const [bgColor ,setBgColor] = useState("HOME")
  const [open, setOpen] = useState(false)
  return (
    <nav className="">
      {/* For large devices */}
      <div className="hidden sm:flex w-full h-30 largeDevice-header">
        <div className="w-full  flex items-center justify-center  fixed top-10 ">
           <ul className="hidden sm:flex justify-around items-center sm:w-2/3 md:2/3  lg:w-1/3 h-15  rounded-4xl border border-white/20 backdrop-blur-3xl">
            {menuNames.map((item)=>(
            <li key={item} className={`sm:px-4 sm:py-2 px-6 py-2 rounded-4xl
              ${bgColor === item ? "bg-white text-black" : "hover:bg-white/5 text-white cursor-pointer"}
              `}
              onClick={()=>setBgColor(item)}            
            >{item}</li>
          ))}
        </ul>
        </div>
      </div>

      {/* For Small Devices */}
      <div className="h-20 largeDevice-header">
          <div className="flex justify-between px-5 items-center h-20 bg-black sm:hidden fixed w-full z-50">
            <h1 className="text-white text-3xl ah-heading">AH</h1>
            <h3 onClick={()=>setOpen(!open)} className="text-3xl">{open ? <IoMdClose className="text-white cursor-pointer" />  : <FiAlignJustify className="text-white cursor-pointer"/>}</h3 >
          </div>
          <div className={`${open ? "flex" : "hidden"} flex-col items-center justify-around sm:hidden bg-black/90 fixed w-full z-40 h-screen `}>
             <ul className="flex flex-col justify-around items-center w-[50%]  h-[60%] ">
               {menuNames.map((item)=>(
                  <li key={item} className={`sm:px-4 sm:py-2 px-6 py-2 rounded-4xl cursor-pointer
                    ${bgColor === item ? "bg-white text-black" : "hover:bg-white/5 text-white"}
                    `}
                    onClick={()=>setBgColor(item)}
                     >{item}</li>
                ))}
              </ul>
          </div>
      </div>

    </nav>
  )
}
