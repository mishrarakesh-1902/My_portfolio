import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { Settings, Music, Music2 } from "lucide-react"; 
import profileImage from "../../assets/myimage.png";
import myAudio from "../../assets/audio.wav"; 
import { motion } from "framer-motion";

const About = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio(myAudio)); 

  // Handle audio play/pause
  useEffect(() => {
    if (isPlaying) {
      audio.loop = true;
      audio.play().catch((err) => console.log("Audio play blocked:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <section
      id="about"
      className="relative py-12 px-[5vw] lg:px-[15vw] font-sans mt-16 md:mt-20 lg:mt-24 
                 text-white transition-colors duration-500 min-h-[85vh] flex items-center"
    >
      {/* Settings Button */}
      <div className="absolute top-2 right-6 md:right-10 z-50">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-3 rounded-full bg-gray-900/80 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 shadow-lg hover:scale-110 transition-all duration-300 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Settings className="relative z-10" />
        </button>

        {/* Dropdown with Audio button */}
        {showSettings && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute right-0 mt-3 flex flex-col space-y-3 origin-top-right"
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900/90 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:bg-gray-800 transition-all shadow-xl whitespace-nowrap"
            >
              {isPlaying ? <Music2 size={18} className="text-purple-400 animate-pulse" /> : <Music size={18} />}
              <span className="font-semibold text-sm">{isPlaying ? "Pause Audio" : "Play Audio"}</span>
            </button>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-12 lg:gap-20">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 text-center md:text-left mt-8 md:mt-0 flex flex-col justify-center"
        >
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-purple-400">
            Hello World, I'm
          </h1>
          {/* Name */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
            Rakesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Kumar</span>
          </h2>
          {/* Skills Heading with Typing Effect */}
          <div className="h-12 sm:h-auto">
             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 leading-tight">
               <span className="font-light">I build scalable solutions as a </span>
               <ReactTypingEffect
                 text={[
                   "Fullstack Engineer.",
                   "MERN Stack Developer.",
                   "Frontend Specialist.",
                   "Python Developer.",
                 ]}
                 speed={80}
                 eraseSpeed={40}
                 typingDelay={500}
                 eraseDelay={2000}
                 cursorRenderer={(cursor) => (
                   <span className="text-purple-500 font-bold">{cursor}</span>
                 )}
                 displayTextRenderer={(text, i) => {
                   return (
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold">
                       {text}
                     </span>
                   );
                 }}
               />
             </h3>
          </div>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-6 leading-relaxed max-w-2xl font-light">
            I am a passionate Full Stack Developer with hands-on experience in
            building responsive and intelligent web applications using Django
            and the MERN stack. I specialize in developing scalable architectures 
            and crafting premium user experiences, bringing ideas to life with modern web technologies.
          </p>
          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=1tODl8T15YtLdj5--jKTkW9fZ_4fY_5QI"
              download="Rakesh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
              </div>
              <span className="relative z-10 tracking-wider">DOWNLOAD CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-2/5 flex justify-center md:justify-end relative"
        >
          {/* Circular Glow Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/30 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          <Tilt
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full relative p-2"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
             {/* Gradient Border Wrapper */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-700 via-fuchsia-500 to-transparent p-1 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
               <div className="w-full h-full bg-[#050414] rounded-full overflow-hidden p-2">
                 <img
                   src={profileImage}
                   alt="Rakesh Kumar"
                   className="w-full h-full rounded-full object-cover select-none"
                   style={{ filter: "contrast(1.1) brightness(1.1)" }}
                 />
               </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
