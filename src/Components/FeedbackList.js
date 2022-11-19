import React from 'react'
import FeedbackItem from '../Components/FeedbackItem'
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from 'react'

function FeedbackList() {
    const {feedback,isLoading} = useContext(FeedbackContext)

    if(isLoading){
      return(
        <div className="loader">
          Data is Loading...
        </div>
      )
    }

  return (
    <div>{feedback.length && feedback.map(item => {
        return(<FeedbackItem key={item.id} feedback={item} />)
    })}</div>
  )
}

export default FeedbackList