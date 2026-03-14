import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[5vw] lg:px-[15vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          PROJECTS
        </motion.h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto"
        >
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={itemVariants}
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:border-purple-500/50 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full relative"
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="p-4 flex-shrink-0">
               {/* Hover Bug Fix: Parent is overflow-hidden, Image scales without layout shift */}
              <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 pt-2 line-clamp-3 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] px-2.5 py-1 text-[11px] font-semibold text-purple-300 tracking-wider rounded border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl lg:w-full w-[95%] max-w-4xl overflow-hidden relative flex flex-col max-h-[90vh]"
            >
              <div className="absolute top-4 right-4 z-10 w-full flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white bg-black/50 hover:bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row h-full overflow-y-auto custom-scrollbar">
                 {/* Image Section */}
                 <div className="w-full md:w-1/2 p-4 md:p-6 bg-gray-900/50 flex align-center justify-center min-h-[250px] md:min-h-[400px]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover md:object-contain rounded-xl shadow-lg border border-white/5"
                    />
                 </div>
                 
                 {/* Content Section */}
                 <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {selectedProject.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                        {selectedProject.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-white text-sm font-semibold mb-3 tracking-wide">TECHNOLOGIES USED</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-[#251f38] text-purple-300 px-3 py-1 font-medium text-xs md:text-sm rounded-md border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                
                    <div className="flex gap-4 mt-6">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl text-sm font-semibold text-center transition-colors border border-white/10"
                      >
                        Source Code
                      </a>
                      {selectedProject.webapp && (
                         <a
                         href={selectedProject.webapp}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-sm font-semibold text-center transition-colors shadow-lg shadow-purple-600/20"
                       >
                         Live Demo
                       </a>
                      )}
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
