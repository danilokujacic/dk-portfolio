import { FunctionComponent } from "react"
import { skills } from "../../configuration/skills"

const SkillList: FunctionComponent = () => {
  return (
    <ul className="flex absolute bottom-0.5 pr-4 md:pr-0 md:relative md:bottom-0 p-0 flex-wrap w-full max-h-32 overflow-y-auto mb-16 text-lg md:text-2xl">
          {skills.map(item => <li key={item.color} className={`${item.color} mr-3 mt-3`}>#{item.text}</li>)}
        </ul>
  )
}

export default SkillList