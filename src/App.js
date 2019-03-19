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
    filterTerm: "",
    newName: ""
    // newRole: "",
    // newPatronus: ""
  }

  componentDidMount() {
    fetch(getGryffindor)
      .then(resp => resp.json())
      .then(students => students[0].members.map(student => {
        fetch(getStudent(student._id))
          .then(resp => resp.json())
          .then(student => this.setState({ allStudents: [...this.state.allStudents, student]}))
      }))
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

  handleFilterTerm = (e) => {
    this.setState({
      filterTerm: e.target.value
    })
  }

  handleFilter = (array) => {
    if(this.state.filterTerm === "") {
      return array
    } else {
      return [...array].filter(student => student.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
    }
  }

  handleEditForm = (e, student) => {
    student.name = e.target.value
    this.setState({
      newName: e.target.value
    })
  }

  render(){
    console.log(this.state);
    return (
      <div id="character-container">
        <Filter filterTerm={this.state.filterTerm} handleFilterTerm={this.handleFilterTerm} />
        <CharacterList students={this.handleFilter(this.state.allStudents)} handleToggle={this.handleAdd} handleEditForm={this.handleEditForm} />
        <TeamList students={this.handleFilter(this.state.teamStudents)} handleToggle={this.handleRemove} handleEditForm={this.handleEditForm} />
      </div>
    )
  }
}

export default App;
