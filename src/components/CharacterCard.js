import React from 'react';

const CharacterCard = (props) => {
  return (
    <div id="character-card">
      {props.student.name}<br/>
      <button onClick={() => props.handleToggle(props.student)} >Toggle</button>
      <button>Edit</button>
    </div>
  )
}

export default CharacterCard;
