import { useState } from "react"
export const Header = () => {
  const menuNames = ["HOME","ABOUT","PROJECTS","CONTACT"]
  const [bgColor ,setBgColor] = useState("HOME")
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
      <div className="flex flex-col  sm:hidden">
       <h1 className="text-white">hi</h1>
      </div>
    </nav>
  )
}
