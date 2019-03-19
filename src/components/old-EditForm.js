import React from 'react'

const EditForm = (props) => {

  return (
    <div id="character-card">
      <p>Name: <input type="text" value={props.newName} onChange={(e) => props.handleEditForm(e, props.student)} /> </p>
      <button onClick={props.handleClickBtn}>Submit Edit</button>
    </div>
  )
}

export default EditForm
