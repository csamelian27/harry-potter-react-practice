import React from 'react'

const EditForm = (props) => {
  console.log(props);
  return (
    <div id="character-card">
      <p>Name: <input type="text" value={props.student.name} onChange={(e) => props.handleChangeName(e, props.student)} /></p>
      <button onClick={props.handleClickEdit} >Submit Edit</button>
    </div>
  )
}

export default EditForm
