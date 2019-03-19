import React from 'react';
import Card from './CharacterCard';

const TeamList = (props) => {

  let cards = props.students.map(student => <Card key={student._id} student={student} handleToggle={props.handleToggle} newName={props.newName} handleChangeName={props.handleChangeName} />)

  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
      {cards}
    </div>
  )
}

export default TeamList;
