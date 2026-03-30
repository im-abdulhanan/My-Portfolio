import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full h-[10vh] bg-black flex items-center justify-between px-10">
        <div className="  w-fit flex gap-2">
            <a href="https://github.com/im-abdulhanan" className="text-white text-2xl">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/ihanan/" className="text-white text-2xl">
                <FaLinkedin/>
            </a>
        </div>
        <div className="">
            <p className="text-white/60">
                &copy; 2026 Abdul Hanan. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}
