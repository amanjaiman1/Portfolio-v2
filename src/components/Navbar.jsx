import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animate, easeIn, easeInOut, motion, spring } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const containerVariants = {
  open: {
    width: `240px`,
    transition: {
      staggerChildren: 0.1,
      
    },
  },
  closed: {
    width: `60px`,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
}

const childVariants = {
  open: { opacity: 1, y:200 },
  closed: { opacity: 0, y:0 },
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > -180);
   });
 }, [5000]);


  

  return (
    <nav
      className={`${styles.paddingX} ${scroll ? "bg-[#804dee]" : "bg-[]" } w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className=" w-full flex items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

            {/* Logo is Appearing Here  */}

          <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-full" />
          <p className="text-white text-[15px] font-bold cursor-pointer flex">
      
            
          </p>
        </Link>


          {/* Nav Links are HERE  */}
          <motion.div 
          className="ml-auto"
          animate={{
            y: 0,
            x: 0
          }}
          initial = {{
            x: 1000
          }}

          transition={{
            type: "spring",
            stiffness: 100

          }}
          
          >
          <ul className="list-none ml-[auto] hidden sm:flex flex-row gap-16">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-[#2a2338]"
              } hover:text-white text-[20px]
             font-bold cursor-pointer
             transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-all ...
             `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}> {Link.title}</a>
            </li>
          ))}
        </ul>
          </motion.div>

        

        {/* <div className="absolute inset-0 justify-end sm:block hidden mt-20
          m-4 ">

          <div
            onClick={() => window.open
            ("https://github.com/amanjaiman1", "blank")}
            className=" w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer "
          >
          <img
           src={github}
           alt="github"
           className="w-8 h-8 object-contain" />
          </div> &nbsp; &nbsp;

          <div
            onClick={() => window.open
            ("https://www.linkedin.com/in/aman-jaiman-b4a36b199/", "blank")}
            className=" w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer "
          >
           <img
            src={linkedin}
            alt="linkedin"
            className="w-7 h-7 object-contain "  />
          </div> &nbsp;&nbsp;

          <div
            onClick={() => window.open
            ("https://drive.google.com/file/d/14CtUDvA_KN2trdwElqRim023qM5iBnt7/view?usp=sharing", "blank")}
            className=" w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer "
          >
           <img
            src={cv}
            alt="linkedin"
            className="w-7 h-7 object-contain "  />
          </div>

        </div> */}

        <motion.div
        initial={`closed`}
        animate={toggle ? `open` : `closed`}
        variants={containerVariants}
        transition={{
          duration: 1,
        }}

        className="sm:hidden flex flex-1 justify-end
       items-center "
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
          initial={{ opacity: 0, y:200 }}
          variants={childVariants}
          animate = {{
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100
          }}
          
          className={`${ !toggle
               ? "hidden"
               : "flex"
            }  p-6 backdrop-blur-sm bg-purple-200 ... absolute top-20
               right-0 mx-4 my-2 min-[140px] z-0 rounded-xl`}
          >
            <ul
              className="list-none flex justify-end items-start
        flex-col gap-4"
            >
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-purple-500"
                  } font-poppins text-[16px]
                    cursor-pointer font-medium `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}> {Link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
