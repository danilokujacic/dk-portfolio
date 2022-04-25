import AnimatedTitle from "../Shared/AnimatedTitle"
import {motion} from "framer-motion"
import PageNavigationButton from "../Shared/PageNavigationButton"
import { projects } from "../../configuration/projects"

const TitleSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative">
        <h1 className="text-3xl md:text-4xl font-semibold uppercase"><AnimatedTitle title="Projects" /></h1>
        <motion.div transition={{delay:1.9}} initial={{opacity:0}} animate={{opacity:1}}>
            <PageNavigationButton className="bottom-12 -translate-x-1/2 left-1/2" navigateTo={projects[0].name.toLowerCase().replace(' ', '-')} />
        </motion.div>
    </section>
  )
}

export default TitleSection