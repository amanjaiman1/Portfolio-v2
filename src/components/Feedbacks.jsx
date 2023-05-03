import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn,fadeInCard, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const FeedbackCard = ({ index, testimonial,
   name, designation, company, image}) => (
  <motion.div 
  variants={fadeIn("left", "spring", 0.5 * index, 1.75)}
    className = "bg-black p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <p>{testimonial}</p>

    <div className="mt-7 flex justify-between
     items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span
            className="blue-text-gradient">
              
            </span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} at {company}
        </p>

      </div>

      <img 
        src={image}
        alt={`feedback-by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />

    </div>

  </motion.div>
)

const FeedbackCard2 = ({ index, testimonial,
  name, designation, company, image}) => (
 <motion.div 
   className = "bg-black p-10 rounded-3xl xs:w-[320px] w-full"
 >
   <p className="text-white font-black text-[48px]">"</p>
   <p>{testimonial}</p>

   <div className="mt-7 flex justify-between
    items-center gap-1">
     <div className="flex-1 flex flex-col">
       <p className="text-white font-medium text-[16px]">
         <span
           className="blue-text-gradient">
             
           </span> {name}
       </p>
       <p className="mt-1 text-secondary text-[12px]">
         {designation} at {company}
       </p>

     </div>

     <img 
       src={image}
       alt={`feedback-by-${name}`}
       className="w-10 h-10 rounded-full object-cover"
     />

   </div>

 </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px]">
      <div 
        className={`${styles.padding}
         shadow-lg testi z-1 rounded-2xl min-h-[300px] `}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText}>
            Testimonials
          </h2>
        </motion.div>
      </div>
      <motion.div

       className={`${styles.paddingX} -mt-20 relative max-sm:hidden
        pb-14 flex flex-wrap gap-7 `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
          key = {testimonial.name}
          index = {index}
          {...testimonial}
          />
        ) )}

      </motion.div>

      <motion.div

       className={`${styles.paddingX} -mt-20 relative sm:hidden
        pb-14 flex flex-wrap gap-7 `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard2 
          key = {testimonial.name}
          index = {index}
          {...testimonial}
          />
        ) )}

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "")