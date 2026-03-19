import "../css components/TechSection.css"
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



export const TechSection = () => {
  return (
    <div className="w-full h-[100vh] sm:h-[80vh] TechMainDiv flex items-center ">
        <div className="w-full h-[90vh] sm:h-[60vh]  flex flex-col items-center justify-center   ">
            <div className="teach-div">
              <h1 className="teach-title text-[300%] sm:text-[500%] text-white/80">Tech Stack</h1>
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
  )
}


