import "../css components/Projects.css"
import { projectDetails } from "./ProjectData"
export const Projects = () => {
  return (
    <div className="w-full h-[100%] Projects-main-Div flex flex-col items-center p-10">
      <div className="project-div">
          <h1 className="Project-title text-white/70 text-[300%] sm:text-[500%] ">Projects</h1>
      </div>
        <div className="w-[80%] h-[100%] border border-white flex flex-wrap justify-around">
          {projectDetails.map((item)=>(
            <div className="project-card w-[300px] h-[400px] p-5 flex flex-col items-center">
              <img src={item.img} alt="" className="rounded-[15px]" />
              <h1 className="bg-gray-500 w-[85%] text-3xl p-1">{item.title}</h1>
              <div className="">
                <span className="bg-gray-500">{item.skils}</span>
              </div>
              <a href={item.livePre}>Live Preview</a>
            </div>
          ))}
        </div>
    </div>
  )
}
