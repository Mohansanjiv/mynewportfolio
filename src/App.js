import "./App.css";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExfo from "./pages/WorkExfo/WorkExfo";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const { theme } = useTheme();

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <WorkExfo />
          <TechStack />
          <Projects />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Made with Sanjiv &copy; 2025</h4>
        </div>
        <ScrollToTop
          smooth
          color="#ffffff"
          style={{ backgroundColor: "#1e1e1e", borderRadius: "80px" }}
        />
      </div>
    </>
  );
}

export default App;
