import React from 'react';
import Card from './CharacterCard';

const StudentContainer = (props) => {

  const cards = props.students.map(studentObj => <Card key={studentObj._id} student={studentObj} handleToggle={props.handleToggle} button="Add" handleEditForm={props.handleEditForm} />)

  return (
    <div id="character-list">
      <h2>My Character List</h2>
      {cards}
    </div>
  )
}

export default StudentContainer;
