
import React, { Component } from 'react';

class TruckForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      start_time: '7am',
      end_time: '8pm'
  };
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

  update(property) {
    return e => 
    this.setState({[property]: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    var settings = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    this.callBackendAPI(settings)
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async (settings) => {
    const response = await fetch('http://localhost:3000/api/trucks', settings)
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <form className="truck-form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input placeholder="Name of truck" type="text" value={this.state.name} onChange={this.update('name')} />
        </label>
        <label>
         Start Time:
          <select placeholder="Choose a start time" 
            required 
            name="Start Time" 
            type="text" 
            value={this.state.start_time}
            onChange={this.update('start_time')} >
            <option value="7am">7am</option>
            <option value="8am">8am</option>
            <option value="9am">9am</option>
            <option value="10am">10am</option>
            <option value="11am">11am</option>
            <option value="12am">12am</option>
            <option value="1pm">1pm</option>
            <option value="2pm">2pm</option>
            <option value="3pm">3pm</option>
            <option value="4pm">4pm</option>
            <option value="5pm">5pm</option>
            <option value="6pm">6pm</option>
            <option value="7pm">7pm</option>
            <option value="8pm">8pm</option>
          </select>
        </label>
        <label>
         End Time:
          <select placeholder="Choose a end time" 
            required 
            name="End Time" 
            type="text" 
            value={this.state.end_time}
            onChange={this.update('end_time')} >
            <option value="7am">7am</option>
            <option value="8am">8am</option>
            <option value="9am">9am</option>
            <option value="10am">10am</option>
            <option value="11am">11am</option>
            <option value="12am">12am</option>
            <option value="1pm">1pm</option>
            <option value="2pm">2pm</option>
            <option value="3pm">3pm</option>
            <option value="4pm">4pm</option>
            <option value="5pm">5pm</option>
            <option value="6pm">6pm</option>
            <option value="7pm">7pm</option>
            <option value="8pm">8pm</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TruckForm;