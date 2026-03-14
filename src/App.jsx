import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Expers from "./components/Expers/Exper";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      
      {/* Background Blobs for ambient lighting */}
      <BlurBlob position={{ top: '10%', left: '10%' }} size={{ width: '40vw', height: '40vw' }} />
      <BlurBlob position={{ top: '60%', right: '10%' }} size={{ width: '50vw', height: '50vw' }} />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none">
         <div className="absolute inset-0 bg-[#050414] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000_100%)]"></div>
         {/* Second mask for smoother fade out near the bottom */}
         <div className="absolute inset-0 bg-[#050414] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_100%)] opacity-80"></div>
      </div>
      
      <div className="relative pt-20 z-10 flex flex-col">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Experience />
          <Expers />
          <Work />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
