import aboutImg from "../assets/myphoto.jpg";
import { motion } from "framer-motion";
const About = () => {
  return ( <div className="border-B border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">About
      <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1,x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
            
            </motion.div>
            <motion.div
            whileInView={{opacity: 1,x: 0}}
            initial={{opacity:0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">
                I am a B.Tech CSE student at KIIT University, passionate about building innovative web applications. With a solid foundation in both front-end and back-end development, I possess strong problem-solving skills and attention to detail. I am also a proactive team player and leader, known for my effective communication, adaptability, and commitment to continuous learning. My goal is to contribute to impactful projects with high-quality, scalable solutions.
                </p>
            </div>
            </motion.div>
      </div>
    </div>
  );
};

export default About;
