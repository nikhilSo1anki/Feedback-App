import React, { useEffect } from 'react'
import RatingsContainer from './RatingsContainer'
import { useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from 'react'

function FeedbackForm() {
  const {handleAddFeedback,editFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState('');
  const [rating,setRating] = useState();


  useEffect(()=>{
    if(editFeedback.edit){
      setText(editFeedback.item.text);
    }
  },[editFeedback])

  const handleText = (e) => {
    setText(e.target.value);
  }

  const selectedRating = (rating)=>{
    setRating(rating);
  } 

  const newFeedback = {
    text: text,
    rating : rating,
  }

  return (
    <div className="feedbackForm">
        <span>How would you rate us ?</span>
        <RatingsContainer selectedRating={selectedRating}/>
        <input onChange={handleText} type="text" placeholder="Write a review" value={text}></input>
        <button className="addButton" onClick={()=>handleAddFeedback(newFeedback)}>Add</button>
        {text.length < 10 && <div className="warning">Enter more than 10 characters</div>}
    </div>
  )
}

export default FeedbackForm