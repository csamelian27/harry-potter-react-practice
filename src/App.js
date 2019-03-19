import React, {Component} from 'react';
import './App.css';
import {getGryffindor} from './endpoints'
import CharacterList from './components/CharacterList.js'
import TeamList from './components/TeamList.js'
import Nav from './components/Nav.js'

class App extends Component {

  state = {
    allStudents: [],
    teamStudents: []
  }

  componentDidMount() {
    fetch(getGryffindor)
      .then(resp => resp.json())
      .then(students => this.setState({ allStudents: students[0].members }))
  }

  handleAdd = (studentObj) => {
    let newAllStudents = [...this.state.allStudents].filter(student => student._id !== studentObj._id)
    let newTeamStudents = [studentObj, ...this.state.teamStudents]
    this.setState({
      allStudents: newAllStudents,
      teamStudents: newTeamStudents
    })
  }

  handleRemove = (studentObj) => {
    let newAllStudents = [studentObj, ...this.state.allStudents]
    let newTeamStudents = [...this.state.teamStudents].filter(student => student._id !== studentObj._id)
    this.setState({
      allStudents: newAllStudents,
      teamStudents: newTeamStudents
    })
  }

  render(){
    console.log(this.state);
    return (
      <div id="character-container">
        <Nav />
        <CharacterList students={this.state.allStudents} handleToggle={this.handleAdd} />
        <TeamList students={this.state.teamStudents} handleToggle={this.handleRemove} />
      </div>
    )
  }
}

export default App;
