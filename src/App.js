
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/TechStack/TechStack';
import WorkExfo from './pages/WorkExfo/WorkExfo';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
        <Layout/>
        <div className='container'>
           <About/>
           <Education/>
           <WorkExfo/>
           <TechStack/>
           <Projects/>
           <Contact/>
           
        </div>
    </>
  );
}

export default App;
