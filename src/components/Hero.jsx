import { delay, motion } from 'framer-motion'

import { styles } from '../styles'
import { manoffice, officeplus } from '../assets'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className = {`${styles.paddingY} absolute inset-0 top-[120px]
       max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className = "flex flex-col justify-center items-center mt-5">

          <motion.div 
          animate = {{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 160, 270, 360, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          initial = {{
            borderRadius: ["50%"],
          }}
          transition={{
            duration: 5,
            repeat: delay,
          }}
          className = " translate-y-6 w-10 h-10 rounded-full bg-[#3a2f50]"
           />
          <div className = "w-1 sm:h-48 h-40 bg-[#13072c] " />

        </div>

        <div>
          <h1 className={`${styles.heroHeadText}
          text-white typing-demo`}>
              Hi, I'm <span className="text-[#2a2338] animate-typing"> Aman </span>
          </h1>

          <p className={`${styles.heroSubText}
            mt-2 text-[40px] text-white-100 text_shadows`}>
              <span className="text-[#2a2338] font-bold ">I </span> develop <span className="text-[#2a2338] font-bold"> Eye Seducing </span> Websites
               <br className="sm:block " />
              with user friendly.
            </p>
        </div>

      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex flex-row justify-center items-center'>
        <img src={manoffice} alt="" className=" border-b-2 " />
      </div>

    </section>
  )
}

export default Hero