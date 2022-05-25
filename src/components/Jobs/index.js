import {Component} from 'react'

import Header from '../Header'
import JobItem from '../JobItem'
import Profile from '../Profile'

class Jobs extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
      </div>
    )
  }
}

export default Jobs
