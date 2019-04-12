import React, { Component } from 'react'
import JobItem from './jobs/JobItem'

class TruckItem extends Component {
  render() {
      const jobs = this.props.jobs.map(job => <JobItem key={job.id} {...job}></JobItem>)
    return (
      <div>
        {this.props.name} assignments
        <ul>
        {jobs}
        {jobs}
        {jobs}
        </ul>
      </div>
    )
  }
}

export default TruckItem
