import { Header } from "./components/Header"
import { Home } from "./components/Home"
import "./App.css"
import { TechSection } from "./components/TechSection"
import { Projects } from "./components/Projects"
import { Education } from "./components/Education"
export const App = () => {
  return (
    <div className="">
      <Header />
      <Home/>
      <TechSection/>
      <Projects/>
      <Education/>
    </div>
  )
}
