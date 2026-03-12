import React, { useState } from 'react'
import "../css components/Header.css"

export const Header = () => {
  const [active, setActive] = useState("Home")
  const headerNmaes = ["Home","About","Projects","Skills","Education", "Contact"]
  return (
    <div className="border w-full h-[12vh] flex justify-center items-center bg-black">
      <ul className="h-[7vh] w-[36%] bg-white/5 backdrop-blur-lg border border-white/20 flex justify-around items-center rounded-4xl">
        {headerNmaes.map((item)=>(
          <li key={item}
          onClick={()=> setActive(item)
          }
          className={`header-li py-2 px-4 rounded-3xl cursor-pointer ${
              active === item
                ? "bg-white text-black"          // active styling
                : "hover:bg-white/10 hover:backdrop-blur-lg text-white" // default/hover styling
            }`}>
              {item}
            </li>
        ))}
      </ul>
    </div>
  )
}
