import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeline = props => {
  const {item1, list} = props

  const returnItem = item => (
    <div className="div1">
      <p>{item.name}</p>
    </div>
  )

  return (
    <div>
      <div className="con2">
        <h1>{item1.courseTitle}</h1>
        <div className="con2">
          <AiFillClockCircle className="con7" />
          <p>{item1.duration}</p>
        </div>
      </div>
      <p>{item1.description}</p>
      <div className="con1">{list.map(each => returnItem(each))}</div>
    </div>
  )
}

export default CourseTimeline
