import React from 'react';
import CharacterDetails from './CharacterDetails'
import EditForm from './EditForm'

class StudentContainer extends React.Component {

  state = {
    clicked: false
  }

  handleClickBtn = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div id="character-list">
        {this.state.clicked ? <EditForm handleClickBtn={this.handleClickBtn} handleEditForm={this.props.handleEditForm} student={this.props.student} /> : <CharacterDetails student={this.props.student} button={this.props.button} handleToggle={this.props.handleToggle} handleClickBtn={this.handleClickBtn} />}
      </div>
    )
  }
}

export default StudentContainer;
