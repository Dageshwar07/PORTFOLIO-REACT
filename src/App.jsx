
import './App.css'
import ScrollToTop from "react-scroll-to-top";
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Education from './pages/Educations/Education'
import Projects from './pages/Projects/Projects'
import Techstack from './pages/Techstack/Techstack'
import WorkExp from './pages/workExp/WorkExp'
import { useTheme } from "./context/ThemeContext";
import Zoom from 'react-reveal/Zoom';
import MobileNav from './components/Layout/Mobile Nav/MobileNav';

function App() {
  const [theme] = useTheme();

  return (
    <>


      <div id={theme}>
        <MobileNav />
        <Layout />

        <Zoom bottom>

          <div className="container">

            <About />
            <Education />
            <Techstack />
            <Projects />
            <WorkExp />
            <Contact />

          </div>
        </Zoom>


        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Made With 😍 DM Worlds &copy; 2023</h4>
        </div>
      </div >
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />


    </>
  )
}

export default App
