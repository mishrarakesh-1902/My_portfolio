import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      // Adjusted offset for sticky navbar
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Certificates" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[5vw] lg:px-[15vw] ${
        isScrolled 
          ? "bg-[#050414]/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="text-white flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold cursor-pointer flex items-center group select-none"
        >
          <span className="text-purple-500 mr-1 opacity-70 group-hover:opacity-100 transition-opacity">&lt;</span>
          <span className="text-white tracking-wide">Rakesh</span>
          <span className="text-purple-500 mx-0.5 opacity-70 group-hover:opacity-100 transition-opacity">/</span>
          <span className="text-white tracking-wide">Kumar</span>
          <span className="text-purple-500 ml-1 opacity-70 group-hover:opacity-100 transition-opacity">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 relative group ${
                activeSection === item.id ? "text-white" : "hover:text-white"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="py-2">
                {item.label}
              </button>
              {/* Active / Hover Indicator */}
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-purple-500 transform origin-left transition-transform duration-300 ${
                activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </li>
          ))}
        </ul>

        {/* Social Icons & Contact CTA */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="https://github.com/mishrarakesh-1902"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-b64934284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0a66c2] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <button 
             onClick={() => handleMenuItemClick("contact")}
             className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
             Say Hello
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-1"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#050414]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-[5vw] py-6 space-y-4 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`text-lg font-medium cursor-pointer ${
                activeSection === item.id ? "text-purple-400" : "hover:text-white"
              }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="w-full text-left py-2"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="w-full h-px bg-white/10 my-2"></li>
          <li className="flex space-x-6 py-2">
            <a
              href="https://github.com/mishrarakesh-1902"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rakesh-kumar-b64934284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0a66c2]"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
