import Contact from './components/Contact';
import Header from './components/Header'
import HeroPage from './components/HeroPage'
import Projects from './components/Projects';
import Skill from './components/Skill';
import Skills from './components/Skills';
const col1= "#48C9B0";
export default function Home() {
  return (
    <>
    <Header/>
    <HeroPage/>
    {/* <Skills/> */}
    <Skill/>
    <Projects/>
    <Contact/>
    </>
  )
}
