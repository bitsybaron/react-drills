import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(val) {
    this.setState({
        input: val
    })
}
  
  handleClick(){
    let newList = this.state.list;
    newList.push(this.state.input);
    this.setState({
      list: newList
    })
    
  }

  render() {
    
    return (
      <div className="App">
        <h1>To Do List</h1>
        <NewTask input={this.state.input} list={this.state.list} change={this.handleChange} click={this.handleClick}/>
        {listy}
      </div>
    )
  }

}

export default App;
