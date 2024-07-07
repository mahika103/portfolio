import { RiReactjsLine } from "react-icons/ri"
import { FaHtml5,FaCss3,FaNodeJs, FaPython, FaBootstrap } from "react-icons/fa"
import { TbBrandJavascript,TbBrandCpp, TbBrandFirebase, TbBrandNextjs } from "react-icons/tb"
import { SiCss3, SiJavascript, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr"
import { motion } from "framer-motion";

const iconVariants = (duration)=> ({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
             repeatType:"reverse"

        },
    },
});
const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
         className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
             variants={iconVariants(1.5)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-red-700" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(1.5)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-300" />
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-purple-950" />
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-blue-500" />
            </motion.div>
            
            
        </motion.div>
    </div>
    
  );
};

export default Tech;
