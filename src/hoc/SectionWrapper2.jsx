import { motion } from "framer-motion"
import { Component } from "react"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (Component, idName) => 
function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial= "hidden"
            whileInView = "show"
            viewport={{once: true, amount: .25 }}
            className = {`${styles.padding} max-w-8xl 
              relative z-0 justify-center items-center `}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>

         <Component />

        </motion.section>
    )
}

export default SectionWrapper