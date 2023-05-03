import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, fadeInCard, textVariant, textVariant1 }  from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full card">
      <motion.div 
        variants={fadeInCard("left", "bounce", .5 * index, 0.75)}
        className = "w-full bg-[#020810a1]  p-[1px] rounded-[20px] shadow-card "
      
      >

        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="face face1 backdrop:blur-sm rounded-[20px]
           py-5 px-12 min-h-[280px]  flex justify-evenly
           items-center flex-col"
        >

          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] 
          font-bold text-center ">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const ServiceCard2 = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px] justify-center ml-10">
      <motion.div 
        className = "w-full bg-[#020810a1]  p-[1px] rounded-[20px] shadow-card "
      
      >

        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="backdrop:blur-sm rounded-[20px]
           py-5 px-12 min-h-[280px]  flex justify-evenly
           items-center flex-col"
        >

          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] 
          font-bold text-center ">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 500);
   });
 }, [5000]);

  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={`  ${scroll ? "text-[#000000] letter" : "text-[#fdfdfd]" } ${styles.sectionSubText} mt-10  `}
        >Introduction</p>
      </motion.div>
      <motion.div variants={textVariant1()}>
      <h2 className={styles.sectionHeadText}
        >Overview</h2>
      </motion.div>

      <motion.p 
        variants= {fadeIn("", "", 0.1, 1)}
        className=" text-[13px]"
      >
       I'm an expert software developer with expertise in Java,
        Javascript, Node.js, React.js, and Three.js. I am quick
         to pick things up and work closely with customers to create
         solutions that are practical, scalable, and user-friendly.
         Let's work together to bring your ideas to life.

      </motion.p>
      <br />
      <p className="border-b-2 border-[#70ebc0] "></p>
  

      <motion.div
        whileTap={{ scale: 0, rotateY: -90 ,borderRadius:"50%" }}
      >

      <div className="mt-20 flex flex-wrap max-sm:hidden gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </motion.div>

      {/* for mobile only  */}

      <motion.div>
      <div className="mt-20 flex-wrap flex sm:hidden gap-10">
        {services.map((service, index) => (
          <ServiceCard2 key={service.title} index={index} {...service} />
        ))}
      </div>
      </motion.div>




    </>
  )
}

export default SectionWrapper(About, "about")