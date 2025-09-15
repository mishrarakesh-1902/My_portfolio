import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { Settings, Music, Music2 } from "lucide-react"; // Removed Sun, Moon
import profileImage from "../../assets/myimage.png";
import myAudio from "../../assets/audio.wav"; // ✅ Import audio

const About = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio(myAudio)); // ✅ init only once

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
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 
                 text-white transition-colors duration-500"
    >
      {/* Settings Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-3 rounded-full bg-[#8245ec] text-white shadow-lg hover:scale-110 transition"
        >
          <Settings />
        </button>

        {/* Dropdown with only Audio button */}
        {showSettings && (
          <div className="mt-3 flex flex-col space-y-3">
            {/* Audio Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
            >
              {isPlaying ? <Music2 size={18} /> : <Music size={18} />}
              {isPlaying ? "Stop Music" : "Play Music"}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Rakesh Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span>I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Python/Django Developer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer with hands-on experience in
            building responsive and intelligent web applications using Django
            and the MERN stack. With a strong foundation in both front-end and
            back-end technologies, I specialize in developing real-world
            solutions, such as smart agriculture platforms and e-commerce
            systems. I also integrate machine learning into web solutions to
            enhance data-driven decision-making and user experience.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1SjVWlQasxJamTHqV07LkSmvg0Rf86Xb7/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/8 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rakesh Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
