import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Home } from "./containers/home/index";
import { About } from "./containers/about/index";
import { Experience } from "./containers/experience/index";
import { Projects } from "./containers/projects/index";
import { Contact } from "./containers/contact/index";
import { Navbar } from "./components/navbar";
import particle from "./utils/particle";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleHomePage = location.pathname === "/";
  return (
    <div className="App" >

      {/* ********************************particle js***************************************** */}

      {renderParticleHomePage && (
        <Particles id="particles" options={particle} init={handleInit} />
      )}

      {/* ********************************NavBar********************************************** */}
      <Navbar />


      {/* *******************************Main Page Content************************************ */}
       <div className="App__main-page-content" >
       <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       </div>

     
    </div>
  );
}

export default App;
