import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStat() {
  const {feedback} = useContext(FeedbackContext)
 const avgRating = feedback.reduce((acc,next) =>{return (acc +  next.rating)},0) /feedback.length
  return (
    <div className="feedbackStats">
        <div className="totalFeedbacks">{feedback.length} Reviews</div>
        <div className="avgRating">Average Rating : {avgRating ? avgRating.toFixed(2) : 0}</div>
    </div>
  ) 
}

export default FeedbackStat