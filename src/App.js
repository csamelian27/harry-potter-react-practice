import React, {Component} from 'react';
import './App.css';
import {getGryffindor, getStudent} from './endpoints'
import CharacterList from './components/CharacterList.js'
import TeamList from './components/TeamList.js'
import Filter from './components/Filter.js'

class App extends Component {

  state = {
    allStudents: [],
    teamStudents: [],
    newName: "",
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch(getGryffindor)
      .then(resp => resp.json())
      .then(students => students[0].members.map(student => {
        return fetch(getStudent(student._id))
          .then(resp => resp.json())
          .then(student => this.setState({ allStudents: [...this.state.allStudents, student]}))
      }))
  }

  handleAdd = (studentObj) => {
    const newStudents = [...this.state.allStudents].filter(student => student._id !== studentObj._id)
    const newTeam = [studentObj, ...this.state.teamStudents]
    this.setState({
      allStudents: newStudents,
      teamStudents: newTeam
    })
  }

  handleRemove = (studentObj) => {
    const newStudents = [studentObj, ...this.state.allStudents]
    const newTeam = [...this.state.teamStudents].filter(student => student._id !== studentObj._id)
    this.setState({
      allStudents: newStudents,
      teamStudents: newTeam
    })
  }

  handleChangeName = (e, student) => {
    student.name = e.target.value
    this.setState({
      newName: e.target.value
    })
  }

  handleFilterTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleFilter = (array) => {
    if(this.state.searchTerm === "") {
      return array
    } else {
      return [...array].filter(student => student.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
  }

  render(){
    console.log(this.state);
    return (
      <div id="character-container">
        <Filter searchTerm={this.state.searchTerm} handleFilterTerm={this.handleFilterTerm} />
        <CharacterList students={this.handleFilter(this.state.allStudents)} handleToggle={this.handleAdd} newName={this.state.newName} handleChangeName={this.handleChangeName} />
        <TeamList students={this.handleFilter(this.state.teamStudents)} handleToggle={this.handleRemove} newName={this.state.newName} handleChangeName={this.handleChangeName} />
      </div>
    )
  }
}

export default App;
