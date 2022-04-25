import  { Fragment, FunctionComponent } from "react"
import { projects } from "../../configuration/projects"
import Divider from "../Shared/Divider"
import Project from "../Shared/Project"
import TitleSection from "./TitleSection"


const ProjectList: FunctionComponent= () => {
  return (<>
   <TitleSection />
    <Divider />
    {projects.map((project, index) => <Fragment key={project.name}><Project  project={project}/>{index !== projects.length -1 ? <Divider /> : <></>} </Fragment>)}
    </>
  )
}

export default ProjectList