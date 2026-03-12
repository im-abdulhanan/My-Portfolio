import "../css components/Home.css"
export const Home = () => {
  return (
    <div className="w-full h-[88vh] flex justify-center items-center bg-red-400">
        <div className="w-[50%] h-[60vh] bg-black flex flex-col items-center justify-around">
            <div className="flex  gap-2 items-center w-fit h-fit ">
                <div className="w-[10px] h-[10px] rounded-[100%] bg-green-500 green-small"></div>
                <h4 className="text-white/70">Available For Work</h4>
            </div>
            <div className="">
                <h1 className="coder-heading text-[700%] text-amber-50 fon">Coder <span className="x-span">X</span> Designer</h1>
            </div>
            <div className="">
                <h3 className="text-amber-50 text-3xl">Hallo, i'm Abdul Hanan a Frontend Developer</h3>
                <div className=""></div>
            </div>
        </div>
    </div>
  )
}
