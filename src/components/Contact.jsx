import "../css components/Contact.css"
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="w-full h-[125vh]  sm:h-screen contact-sec">
        <div className="get-touch-div h-[20vh] flex items-center justify-center">
            <h1 className="touch-title text-white/80  text-[300%] sm:text-[500%]">Get in Touch</h1>
        </div>
        <div className="w-full h-[105vh] sm:h-[80vh] flex flex-col justify-around sm:flex-row">
            <div className="contact_us w-full sm:w-1/2 flex flex-col items-center justify-center gap-10 ">
                <h1 className="text-3xl contact-us-title text-yellow-600">Contact Us</h1>
                <div className="flex flex-col items-center">
                    <p className="p text-white/70 text-center">I'm Available For Full-time Roles & Freelance Projects.</p>
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
            <div className="w-full sm:w-1/2 flex items-center">
                <form action="https://formspree.io/f/xzdkreor" method="POST" className="flex flex-col items-center justify-around  w-full h-[50vh]">
                    <div className="fist-last-name  w-[90%] sm:w-[55%] flex justify-between">
                        <input name="Fname" type="text" className="border input border-white/50 py-3 px-2 w-[45%] rounded-[10px]" placeholder="First Name" />
                        <input name="Lname" type="text" className="border input border-white/50 py-3 px-2 w-[45%] rounded-[10px]" placeholder="Last Name" />
                    </div>
                    <div className="email-div w-[90%] sm:w-[55%] ">
                        <input name="mail" type="email" className="input py-3 px-2 rounded-[10px] w-full border border-white/50" placeholder="Email"/>
                    </div>
                    <textarea  placeholder="Message" rows={5} name="message" id="" className="text-white py-3 px-2 w-[90%] sm:w-[55%] rounded-[10px] sm:px-4 input resize-none border border-white/50"></textarea>
                    <div className="w-[90%] sm:w-[55%]">
                        <button type="submit" className="input py-3 px-2 rounded-[10px] submit w-full text-white text-2xl flex items-center justify-center gap-2">
                            Submit
                            <FaTelegramPlane/>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
