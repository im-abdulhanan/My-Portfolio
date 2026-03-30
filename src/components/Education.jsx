import "../css components/Education.css"
import { eduDetails } from "./EducationData";
import { TbSchool } from "react-icons/tb";
export const Education = () => {
  return (
    <div className="w-full h-[190vh]">
        <div className="edu-div w-full h-[20vh] flex items-center justify-center ">
            <h1 className="edu-title text-white/80 text-[300%] sm:text-[500%] ">Education</h1>
        </div>
        <div className=" w-full h-[100%] flex flex-col items-center">
          {eduDetails.map((item)=>(
          <div key={item.id} className="sm:w-[30%] h-[55vh] py-5  flex flex-col justify-around items-center gap-1">
            <i><TbSchool className="text-2xl text-white/70"/></i>
            <h2 className="text-white/70 font">{item.course}</h2>
            <p className="text-white/70 text-center font">{item.int}</p>
            <p className="text-white/70 font">{item.year}</p>
            <p className="text-white/70 font">{item.grade}</p>
            <span className="edu-line w-[1.6px] h-[150px] bg-white/70 mt-5"></span>
          </div>
          ))}
        </div>
    </div>
  )
}
