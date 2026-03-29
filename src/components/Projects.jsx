import "../css components/Projects.css"
import { projectDetails } from "./ProjectData"
import { FaGithub } from "react-icons/fa";
export const Projects = () => {
  return (
    <div className="w-full h-[100%] Projects-main-Div flex flex-col items-center gap-2 p-10">
      <div className="project-div">
          <h1 className="Project-title text-white/70 text-[300%] sm:text-[500%]">Projects</h1>
      </div>
        <div className="w-[full] sm:w-[45%] h-[100%]  flex flex-wrap justify-around items-center gap-y-5">
          {projectDetails.map((item)=>(
            <div key={item} className="project-card w-[300px] h-[350px] p-5 flex flex-col items-center justify-around">
              <img src={item.img} alt="" className="rounded-[10px]" />
              <h1 className="bg-gray-500 w-[85%] text-[20px] p-1 flex justify-center item-title">{item.title}</h1>
              <div className="w-2/2 h-[5vh] flex items-center justify-center gap-5">
                {item.skill.map((skill,index)=>(
                  <span key={index} className="bg-gray-500 px-3 flex flex-wrap rounded-[5px] skill">{skill}</span>
                ))}
                
              </div>
              <a href={item.livePre} className="live">Live Preview</a>
            </div>
          ))}
        </div>
        <a href="https://www.github.com/im-abdulhanan">
        <button className="border border-amber-50 flex items-center text-white px-5 py-1 gap-1 view-more hover:bg-white hover:text-black">View more Projects <FaGithub/></button>
        </a>
    </div>
  )
}
