import React from 'react';
import Card from './CharacterCard';

const StudentContainer = (props) => {

  const cards = props.students.map(student => <Card key={student._id} student={student} handleToggle={props.handleToggle} newName={props.newName} handleChangeName={props.handleChangeName} />)

  return (
    <div id="character-list">
      <h2>My Character List</h2>
      {cards}
    </div>
  )
}

export default StudentContainer;
