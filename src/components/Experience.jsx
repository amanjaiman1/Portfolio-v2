import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, textVariant1, textVariant2 } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
   contentStyle={ { background: '#020810f1',
                    color:'#fff',
                    borderRadius: '20px',
                  }}
   contentArrowStyle = {{ borderRight: '7px solid #232631'}}
   date= {experience.date}
   iconStyle = {{ background: experience.iconBg }}
   icon = {
    <div className="flex justify-center
     items-center w-full h-full">
      <img
       src= {experience.icon}
       alt= {experience.company_name}
       className= "w-[60%] h-[60%] object-contain"
      />
    </div>
   }
   >
    <div>
      <h3 className="text-white text-[18px] sm:text-[24px]
       font-bold" > {experience.title} </h3>

      <p className="text-secondary text-[16px] font-semibold"
       style={{margin: 0}}
       >
        { experience.company_name }</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li 
         key={`experience-point-${index}`}
         className= "text-white-100 text-[10px] sm:text-[14px] pl-1 tracking-wider"
        >
          {point}

        </li>
      ))}
    </ul>
  
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <p className="border-[2px]"></p><br />
    
    <motion.div variants={ textVariant() }>
    <p className={styles.sectionSubText}>
      What I have done so far
    </p>
    </motion.div>
    <motion.div variants={ textVariant1() }>
    <h2 className="text-white sm:text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
      Work Experience.
    </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience,index) => (
          <ExperienceCard key={index} experience = {experience} />
        ))}
      </VerticalTimeline>


    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")