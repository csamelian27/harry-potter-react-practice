import React from 'react';

const CharacterDetails = (props) => {
  return (
    <div id="character-card">
      <p>{props.student.name}</p>
      <button onClick={() => props.handleToggle(props.student)}>Toggle</button>
      <button onClick={props.handleClickEdit} >Edit</button>
    </div>
  )
}

export default CharacterDetails;
