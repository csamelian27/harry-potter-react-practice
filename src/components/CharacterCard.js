import React from 'react';
import CharacterDetails from './CharacterDetails'
import EditForm from './EditForm'

class StudentContainer extends React.Component {

  state = {
    clicked: false
  }

  handleClickEdit = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div id="character-card">
        {this.state.clicked ? <EditForm handleClickEdit={this.handleClickEdit} newName={this.props.newName} handleChangeName={this.props.handleChangeName} student={this.props.student} /> : <CharacterDetails student={this.props.student} handleToggle={this.props.handleToggle} handleClickEdit={this.handleClickEdit} />}
      </div>
    )
  }
}

export default StudentContainer;
