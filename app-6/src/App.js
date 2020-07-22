import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
        userInput: '',
        list: []
    }
  }
  handleChange(val) {
      this.setState({
        userInput: val
      })
  }
  addTask(val) {
    let newList = this.state.list;
    newList.push(val)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <input onChange={e => this.handleChange(e.target.value)}/>
        <button onClick={e => this.addTask(this.state.userInput)}>Add Task</button>
        <Todo listy={this.state.list}/>
      </div>
    )
  }
}

export default App;
