// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[5vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
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
        SKILLS
      </motion.h2>
      <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      <motion.p 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2, duration: 0.5 }}
         className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto"
      >
        A collection of my technical skills and expertise honed through various projects and experiences
      </motion.p>
    </div>

    {/* Skill Categories */}
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-wrap gap-6 lg:gap-8 justify-center"
    >
      {SkillsInfo.map((category) => (
        <motion.div
          variants={itemVariants}
          key={category.title}
          className="group bg-gray-900/80 backdrop-blur-md px-6 sm:px-8 py-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] rounded-2xl border border-white/10 hover:border-purple-500/50 shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/10 group-hover:to-fuchsia-600/10 blur-xl transition-all duration-500 -z-10"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-400 transition-colors">
            {category.title}
          </h3>

          <Tilt
            key={category.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-gray-800/50 border border-gray-700/50 rounded-xl py-2 px-3 hover:bg-gray-800 transition-colors"
                >
                  {skill.icon ? (
                    <span className="text-xl flex items-center justify-center">
                      {skill.icon}
                    </span>
                  ) : (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span className="text-xs font-medium text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
