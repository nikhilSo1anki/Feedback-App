
function RatingContainer({id,value,handleChange,selected}) {
  return (
      <div key={id} className="inputRadioButton">
        <label className="labelforinput" htmlFor={id}><input type="radio" name="rating" className="rating-in-form" onChange={handleChange} id={`${id}`} value={`${value}`} checked={selected===id}/><span>{id}</span></label>
    </div>
  )
}

export default RatingContainer