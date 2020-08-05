import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount(){
    axios.all ([
      axios.get(`https://api.github.com/users/han-sy937`),
      axios.get(`https://api.github.com/users/han-sy937/following`)
    ])
      
      .then(res => {
        this.setState({
          users: res[0].data,
          followers: res[1].data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }

  render() {
  return (
    <div className="App">
      <UserCard users={this.state.users} followers={this.state.followers} />
    </div>
  );
  }
}

export default App;
