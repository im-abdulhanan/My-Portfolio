import { Header } from "./components/Header"
import { Home } from "./components/Home"
import "./App.css"
import { TechSection } from "./components/TechSection"
export const App = () => {
  return (
    <div className="">
       <Header />
      <Home/>
      <TechSection/>
    </div>
  )
}
