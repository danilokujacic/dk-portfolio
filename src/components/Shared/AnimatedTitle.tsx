import { FunctionComponent, useEffect, useMemo } from "react";
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IAnimatedTitle {
    title: string;
}

const variants = {
    out: {
        top: -5,
        opacity:0,
    },
    in: {
        top:0,
        opacity:1
    },
}

type TitleLetter = {
    letter: string;
    id:number;
}

const AnimatedTitle: FunctionComponent<IAnimatedTitle> = ({title}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(( )=>{
        if(inView){
            controls.start('in');
        }
    }, [controls, inView]);

  const splitLetters =  useMemo<TitleLetter[]>(() => title.split('').map((letter ,index) => ({letter, id:index})), [title]);
  return (
    <span ref={ref}>{splitLetters.map(({letter, id}, index) => <motion.span transition={{delay: index * 0.25 }} initial="out" className="relative" animate={controls} variants={variants} key={id}>{letter}</motion.span>)}</span>
  )
}

export default AnimatedTitle