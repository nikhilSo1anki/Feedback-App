import React, { useContext, useState } from 'react'
import RatingContainer from './RatingContainer'
import FeedbackContext from '../Context/FeedbackContext';
import { useEffect } from 'react';

function RatingsContainer({selectedRating}) {
  const {editFeedback} = useContext(FeedbackContext)
    let arrayOfRating = [1,2,3,4,5,6,7,8,9,10]
    const [selected,setSelected] = useState(5);
    const handleChange = (e) =>{
        setSelected(+e.currentTarget.value);
    }

    useEffect(()=>{
      if(editFeedback.edit){
        setSelected(editFeedback.item.rating);
      }
    },[editFeedback])
  
  return (
    <div className="ratingContainer">
        {arrayOfRating.map(item => {return <RatingContainer rating={selectedRating(selected)} selected={selected} handleChange={handleChange} key={item} id={item} value={item}/>})}
    </div>
  )
}

export default RatingsContainer