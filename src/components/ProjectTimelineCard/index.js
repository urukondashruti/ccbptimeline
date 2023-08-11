// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeline = props => {
  const {item2} = props

  return (
    <div>
      <img src={item2.imageUrl} alt="project" className="img1" />
      <div className="con2">
        <h1>{item2.projectTitle}</h1>
        <div className="con2">
          <AiFillCalendar className="con7" />
          <p>{item2.duration}</p>
        </div>
      </div>
      <p>{item2.description}</p>
      <a href={item2.projectUrl} className="para">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeline
