import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles'; 
import { github, juicyboy, studying } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn,fadeInCard, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description,
   tags, image,minImg, source_code_link }) => {
    return (
      <motion.div variants={fadeInCard("right", "bounce", .5 * index, 0.75)}
       className="rounded-[50%]"
       >

        <Tilt 
          options={{
            max:45,
            scale: 1,
            speed: 950
          }}
          className = " box  p-5 rounded-[3px] sm:w-[360px] w-full"
        >

          <div className="relative w-full h-[230px]">
            <img
             src={image}
             alt={name}
             className = "w-full h-full object-cover rounded-2xl"
             />

             <div className="absolute inset-0 flex justify-end
              m-3 card-img_hover ">
                <div 
                onClick={() => window.open(source_code_link, "blank")}
                className="black-gradient w-10 h-10 rounded-full
                  flex justify-center items-center cursor-pointer "
                >
                  <img
                   src={minImg}
                   alt="github sources"
                   className="w-1/2 h-1/2 object-contain" />

                </div>
             </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
            ))}

          </div>

        </Tilt>

      </motion.div>
    )
   }

   const ProjectCard2 = ({ index, name, description,
    tags, image,minImg, source_code_link }) => {
     return (
       <motion.div 
        className="rounded-[50%]"
        >
 
         <Tilt 
           options={{
             max:45,
             scale: 1,
             speed: 950
           }}
           className = " box  p-5 rounded-[3px] sm:w-[360px] w-full"
         >
 
           <div className="relative w-full h-[230px]">
             <img
              src={image}
              alt={name}
              className = "w-full h-full object-cover rounded-2xl"
              />
 
              <div className="absolute inset-0 flex justify-end
               m-3 card-img_hover ">
                 <div 
                 onClick={() => window.open(source_code_link, "blank")}
                 className="black-gradient w-10 h-10 rounded-full
                   flex justify-center items-center cursor-pointer "
                 >
                   <img
                    src={minImg}
                    alt="github sources"
                    className="w-1/2 h-1/2 object-contain" />
 
                 </div>
              </div>
           </div>
 
           <div className="mt-5">
             <h3 className="text-white font-bold text-[24px]">{name}</h3>
             <p className="mt-2 text-secondary text-[14px]">{description}</p>
           </div>
 
           <div className="mt-4 flex flex-wrap gap-2">
             {tags.map((tag) => (
               <p
                 key={tag.name}
                 className={`text-[14px] ${tag.color}`}>
                   #{tag.name}
                 </p>
             ))}
 
           </div>
 
         </Tilt>
 
       </motion.div>
     )
    }


const Works = () => {
  return (
    <>
    <motion.div  variants={ textVariant() } className="border-t-2 pt-2 border-cyan-300">
    <p className={styles.sectionSubText}>
      My work
    </p>
    <h2 className={styles.sectionHeadText}>
      Projects
    </h2>
    </motion.div>

    <div className="w-full sm:flex gap-52">
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className = "mt-3 text-secondary sm:text-[17px] text-[13px] max-w-3xl leading-[30px] "
      >
        Following projects showcases my skills
        and experience through
        real-world examples of my work. Each
        project is breifly described with 
        links to code repositories and live demos in it.
         It reflects my abillity to solve complex 
         problems, work with different technologies,
         and manage projects effectively.
      </motion.p>
      <img className="h-[250px] mt-[-100px] max-sm:mt-3 max-sm:ml-auto " src={studying} alt="" />
    </div>

    <div className="mt-20 flex max-sm:hidden flex-wrap gap-7">
    
      {projects.map((project, index) => (
        <ProjectCard 
          key={`project-${index}`}
          index = {index}
          {...project}
        />
      ))}
      <img className="h-[350px] mt-[90px] ml-[35%]  " src={juicyboy} alt="" />

    </div>

    {/* for Mobile Only  */}

    <div className="mt-20 sm:hidden flex flex-wrap gap-7">
    
      {projects.map((project, index) => (
        <ProjectCard2 
          key={`project-${index}`}
          index = {index}
          {...project}
        />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(Works, "")