import React from 'react';
import User from "./components/User";
import Followers from "./components/Followers";
import Navbar from "./components/Navbar"
import axios from "axios";
import './App.scss';


class App extends React.Component {

state = {
  username: 'JasonRostar',
  userData: [],
  followers: []
}

componentDidMount() {
  axios
    .get(`https://api.github.com/users/${this.state.username}`)
    .then(res => this.setState({userData: res.data}))
    .catch(err => console.log(err))

    axios
    .get(`https://api.github.com/users/${this.state.username}/followers`)
 
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
}



render() {
  return (
    <div >
      <Navbar/>
  
     <br/>
     <br/>
      <User userData={this.state.userData}/>
      <br/>
      <br/>
      <h4  style={{textAlign: "center"}}>Contributions</h4>
      <br/>
      <br/>
      <div className="chart">
      <a href="https://github.com/JasonRostar">
      <img className="chart-img" src="http://ghchart.rshah.org/JasonRostar" alt="Github chart" />
      </a>
      </div>
      <br/>
      <br/>
      <h4 style={{textAlign: "center"}}>Followers</h4>
      <Followers followers={this.state.followers} userData={this.state.userData}/>
    </div>
  );
}

}

export default App;
