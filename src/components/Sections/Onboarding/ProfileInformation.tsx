import { useEffect, useRef } from "react";
import Typewritter from 'typewriter-effect/dist/core';
import { currentCompany } from "../../../configuration";
import {motion} from "framer-motion"
import SkillList from "../../Shared/SkillList";
import PageNavigationButton from "../../Shared/PageNavigationButton";

const variants = {
  fadeIn: {
    opacity: 1,
  },
  fadeOut: {
    opacity:0
  }
}

const ProfileInformation = () => {
    const headerRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
      if (headerRef) {
        const typewritter = new Typewritter(headerRef.current, {
          autoStart: true,
        });
        typewritter
          .typeString('Hi, my name is Danilo. <br/>')
          .typeString(`Im software developer at ${currentCompany}.`)
          .start();
      }
    }, []);
  
  return (
    <div className='md:pr-14 flex-1 text-xl max-w-4xl md:text-3xl mt-6 relative'>
        <h1 ref={headerRef} className='leading-10 font-mono break-words mb-24'></h1>
        <SkillList />
        <motion.p transition={{delay:0.4}} animate="fadeIn" initial="fadeOut" variants={variants}>
          <PageNavigationButton navigateTo="projects" label="More about me" className=" left-1/2 bottom-3 transform -translate-x-1/2 md:left-0  md:bottom-24 md:translate-x-0" />
        </motion.p>
      </div>
  )
}

export default ProfileInformation