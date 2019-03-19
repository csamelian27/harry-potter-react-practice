import React from 'react';
import Card from './CharacterCard';

const TeamList = (props) => {

  let cards = props.students.map(studentObj => <Card key={studentObj._id} student={studentObj} handleToggle={props.handleToggle} button="Remove" handleEditForm={props.handleEditForm} />)

  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
      {cards}
    </div>
  )
}

export default TeamList;
