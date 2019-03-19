import React from 'react';

const CharacterDetails = (props) => {
  return (
    <div id="character-card">
      <p>Name: {props.student.name}</p>
      <p>Role: {props.student.role}</p>
      <p>Patronus: {props.student.patronus ? props.student.patronus : 'None'}</p>
      <button onClick={() => props.handleToggle(props.student)}>{props.button}</button>
      <button onClick={props.handleClickBtn}>Edit</button>
    </div>
  )
}

export default CharacterDetails;
