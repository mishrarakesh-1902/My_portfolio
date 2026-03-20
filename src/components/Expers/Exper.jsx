import React from "react";
import { experience } from "../../constants"; // Import your data
import { motion } from "framer-motion";

const Exper = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[5vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          EXPERIENCE
        </motion.h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto"></div>
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto"
        >
          Professional experience reflecting applied knowledge in modern web development, scalable architecture, and premium user experiences.
        </motion.p>
      </div>

     
      <div className="relative mt-20">
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-purple-500 to-purple-500/20"></div>

        
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between mb-24 w-full relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot & Icon */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center -ml-px w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#050414] bg-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.5)] z-10 overflow-hidden">
               {exp.img && (
                 <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-cover p-1 bg-white rounded-full"
                />
               )}
            </div>

            <div className="w-full md:w-[45%]"></div> 

            {/* Experience Card */}
            <div
              className="w-full pl-20 pr-4 md:px-0 md:w-[45%] mt-8 md:mt-0"
            >
              <div className="group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:border-purple-500/50 p-6 md:p-8 transition-all duration-300 relative overflow-hidden">
                  
                 {/* Decorative background glow */}
                 <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                 
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                     <div>
                       <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                         {exp.role}
                       </h3>
                       <h4 className="text-md text-gray-300 font-medium mt-1">
                         {exp.company}
                       </h4>
                     </div>
                     <span className="inline-block bg-purple-500/20 text-purple-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-purple-500/30 whitespace-nowrap">
                         {exp.date}
                     </span>
                 </div>

                 <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {exp.desc}
                 </p>

                 {exp.liveLink && (
                    <a
                      href={exp.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-6 text-purple-400 hover:text-purple-300 font-semibold transition-colors group/link"
                    >
                      <span>Visit Live Project</span>
                      <svg className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                 )}

                 <div>
                    <h5 className="text-sm font-semibold text-white mb-3 tracking-wide">TECHNOLOGIES & SKILLS</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="bg-[#251f38] text-purple-300 px-3 py-1 text-xs md:text-sm rounded-md font-medium border border-white/5 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                 </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exper;
