
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TruckForm from './components/TruckForm';
import TruckItem from './components/TruckItem';
import JobForm from './components/jobs/JobForm';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:3000/api/trucks')
    const body = await response.json();
    // const body = response
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    const data = this.state.data
    var trucks;
    if(this.state.data) {
      trucks = data.trucks.map ((truck, id) => <TruckItem key={id} {...truck}></TruckItem> )
    } else {
      trucks = "...loading"
    }
    console.log(trucks)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Oncue</h1>
          <TruckForm />
          <JobForm {...trucks}/>
          {trucks}
        </header>
      </div>
    );
  }
}

export default App;