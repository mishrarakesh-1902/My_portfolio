import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/rakeshkumarmishra.mishra.549/" },
    { icon: <FaTwitter size={20} />, link: "#" },
    { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/rakesh-kumar-b64934284/" },
    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/_rakesh__mishra__/" },
    { icon: <FaYoutube size={20} />, link: "https://www.youtube.com/channel/UCKTXSKDZR3vCDh4_XCIe9qw" },
  ];

  return (
    <footer className="relative bg-[#050414] border-t border-white/5 pt-16 pb-8 px-[5vw] lg:px-[15vw] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-purple-600/10 blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand/Logo */}
          <div className="text-center md:text-left">
            <h2 
              className="text-2xl font-bold cursor-pointer inline-flex items-center group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="text-purple-500 mr-1 opacity-70 group-hover:opacity-100 transition-opacity">&lt;</span>
              <span className="text-white tracking-wide">Rakesh</span>
              <span className="text-purple-500 mx-0.5 opacity-70 group-hover:opacity-100 transition-opacity">/</span>
              <span className="text-white tracking-wide">Kumar</span>
              <span className="text-purple-500 ml-1 opacity-70 group-hover:opacity-100 transition-opacity">&gt;</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm max-w-xs mx-auto md:mx-0">
              Building scalable, beautiful, and dynamic digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="text-gray-300 hover:text-purple-400 text-sm font-medium transition-colors"
                aria-label={`Scroll to ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500 order-2 md:order-1 font-medium">
            © {new Date().getFullYear()} Rakesh Kumar. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 order-1 md:order-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 border border-white/5 text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                aria-label={`Visit my social media profile`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
