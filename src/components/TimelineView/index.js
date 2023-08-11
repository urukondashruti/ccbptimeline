import {Chrono} from 'react-chrono'

import CourseTimeline from '../CourseTimelineCard'

import ProjectTimeline from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimeline item1={each} list={each.tagsList} />
          }
          return <ProjectTimeline item2={each} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
