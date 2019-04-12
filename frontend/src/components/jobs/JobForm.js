
import React, { Component } from 'react';

class JobForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      start_time: '7am',
      end_time: '8pm',
      date: '',
      truck_id: null
  };
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.availability = this.availability.bind(this)
    this.check_available = this.check_available.bind(this)
}

  update(property) {
    return e => 
    this.setState({[property]: e.target.value})
  }
  check_available(checkable_jobs) {
      return checkable_jobs.filter(job => !((this.state.start_time < job.start_time && this.state.end_time <= job.start_time) || (this.state.start_time >= job.end_time && this.state.end_time > job.end_time))).length  
    }

  availability() {
    var availableTrucks = []
    const length = Object.values(this.props).length
    for (let i = 0; i < length; i++) {
      var truck = this.props[i];
      const jobs = truck.props.jobs
      console.log(jobs)
      var checkable_jobs = jobs.filter(job => job.date === this.state.date)
      if (!this.check_available(checkable_jobs)) { availableTrucks.push(truck.props.id)}
      console.log(availableTrucks)
    }
    if (availableTrucks.length) {
      this.setState({"truck_id": availableTrucks[0]})
    } else {
      this.setState({"truck_id": null})
    }
    return availableTrucks[0]
  } 

  handleSubmit(event) {
    event.preventDefault()
    this.setState({truck_id: this.availability()})
    if (this.state.truck_id === null) {
      return alert('No Availability choose another time')
    } 
    debugger
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
    const response = await fetch('http://localhost:3000/api/jobs', settings)
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
          <input placeholder="Name of person" type="text" value={this.state.name} onChange={this.update('name')} />
        </label>
        <label>
          Move Date
          <input placeholder="dd/mm/yyyy" type="text" value={this.state.date} onChange={this.update('date')} />
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

export default JobForm
