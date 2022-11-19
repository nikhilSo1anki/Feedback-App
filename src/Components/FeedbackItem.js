import React from 'react'
import Card from './Shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from 'react'

function FeedbackItem({feedback}) {
  const {editItem,deleteItem} = useContext(FeedbackContext)
  return (
    <Card>
        <div className="rating">{feedback.rating}</div>
        <button className="edit" onClick={()=>editItem(feedback)}><FaEdit color="purple"/></button>
        <button className="close" onClick={()=>deleteItem(feedback.id)}><FaTimes color="purple"/></button>
        <div className="feedbackText">{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem