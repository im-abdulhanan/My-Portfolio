import "../css components/Contact.css"
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export const Contact = () => {
  return (
    <div className="w-full h-screen contact-sec">
        <div className="get-touch-div h-[20vh] flex items-center justify-center">
            <h1 className="touch-title text-white/80  text-[300%] sm:text-[500%]">Get in Touch</h1>
        </div>
        <div className="w-full h-[80vh] flex flex-col sm:flex-row">
            <div className="contact_us w-full sm:w-1/2 flex flex-col items-center py-5 gap-10 border ">
                <h1 className="text-3xl contact-us-title text-yellow-600">Contact Us</h1>
                <div className="flex flex-col items-center">
                    <p className="p text-white/70">I'm Available For Full-time Roles & Freelance Projects.</p>
                    <p className="p text-white/70">My Inbox Is Always Open,</p>
                    <p className="p text-white/70">Whether You Have A Question</p> 
                    <p className="p text-white/70">Or</p>
                    <p className="p text-white/70">Just Want To Say Hi,</p>
                    <p className="p text-white/70">I'll Try My Best To Get Back To You!</p>
                </div>
                <div className="">
                    <p className="flex items-center text-white/70 gap-2"><IoIosMail/>imhanan.mail@gmail.com</p>
                    <p className="flex items-center text-white/70 gap-2"><FaPhoneAlt/>+92 3180522085</p>
                    <p className="flex items-center text-white/70 gap-2"><IoHomeSharp/>Peshawar, Pakistan</p>
                </div>
 
            </div>
            <div className="border border-amber-600 w-full sm:w-1/2"></div>
        </div>

    </div>
  )
}
