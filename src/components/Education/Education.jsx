import React from "react";
import { education } from "../../constants"; // Import the education data
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[5vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-3"
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
          EDUCATION
        </motion.h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto"
        >
          My education has been a journey of learning and development. Here are the details of my academic background
        </motion.p>
      </div>

      {/* Education Timeline */}
      <div className="relative mt-20">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-purple-500 to-purple-500/20"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between mb-24 w-full relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center -ml-px w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#050414] bg-white shadow-[0_0_15px_rgba(130,69,236,0.5)] z-20 overflow-hidden ">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover p-1 rounded-full"
              />
            </div>

            <div className="w-full md:w-[45%]"></div> 

            {/* Content Section */}
            <div
               className="w-full pl-20 pr-4 md:px-0 md:w-[45%] mt-8 md:mt-0"
            >
              <div className="group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:border-purple-500/50 p-6 md:p-8 transition-all duration-300 relative overflow-hidden">
                
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                
                {/* Flex container for image and text */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-20 h-20 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-white/20 p-2 shadow-inner">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {edu.school}
                    </h3>
                    <h4 className="text-sm md:text-md text-gray-300 font-medium mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-purple-400 font-semibold mt-2">{edu.date}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{edu.desc}</p>
                  <div className="mt-4 flex items-center gap-2">
                     <span className="text-white text-sm font-semibold">Grade:</span>
                     <span className="bg-purple-500/20 text-purple-300 text-sm font-semibold px-3 py-1 rounded-md border border-purple-500/30">
                        {edu.grade}
                     </span>
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

export default Education;
