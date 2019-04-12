import React, { Component } from 'react'

class JobItem extends Component {
  render() {
    //   const estimate = parseInt(this.props.end_time) - parseInt(this.props.start_time) + 'hrs'
    return (
      <div>
        <li>{this.props.name}</li>
        <li>{this.props.date}</li>
        <li>{this.props.start_time}</li>
        <li>{this.props.end_time}</li>
      </div>
    )
  }
}

export default JobItem
