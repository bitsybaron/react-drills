import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://www.caa.com/sites/default/files/styles/headshot_500x500/public/2020-02/Mindy-Kaling_0.jpg?itok=iEc5gokl'}/>
      </div>
    )
  }
}

export default App;
