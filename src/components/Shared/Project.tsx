import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { FunctionComponent, useEffect } from 'react'
import { IProjectProp } from '../../configuration/projects'
import { useScreen } from '../../shared/screenSize';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProjectProps {
    project: IProjectProp;
}

const variants = {
    fadeOut: {
        opacity:0,
        scale: 0.5
    },
    fadeIn: {
        opacity:1,
        scale:1,
        transition: {
            duration: 0.8
        }
    },
    zoomIn: {
        opacity:1,
        scale:1
    }
}

const Project: FunctionComponent<IProjectProps> = ({project}) => {
    const {isMobile} = useScreen();
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("fadeIn");
          setTimeout(() => {
              controls.start('zoomIn')
          }, 1000)
        }
      }, [controls, inView]);
  return (
    <section id={project.name.toLowerCase().replace(' ', '-')} className="min-h-screen w-4/5 mx-auto flex relative  justify-center items-center">
        <motion.div ref={ref} initial='fadeOut' animate={controls} variants={variants} className="flex  flex-col md:flex-row">
            <motion.div  animate={controls} initial='fadeOut' variants={{fadeOut: {opacity:0}, zoomIn: {opacity:1}}} className={`w-36 self-center md:w-42 md:h-42 md:self-start shrink-0 h-32 mr-6 ${isMobile ? "-translate-x-1/2 left-1/2 absolute top-3" : ''}`}>
                <img src={project.image} className="object-fit w-full h-full"  alt={`${project.name}`}/>
            </motion.div>
            <div className="space-y-3">
                <h1 className="text-l md:text-xl font-semibold">{project.name}</h1>
                <p className="font-normal text-xs md:text-base">{project.description}</p>
                <br/>
                <a href={project.link} className="flex items-start animate-pulse text-black font-semibold"><span className="mr-3">View more</span> <FontAwesomeIcon className="self-center mt-px" icon={faChevronRight} /></a>
            </div>
        </motion.div>
    </section>
  )
}

export default Project