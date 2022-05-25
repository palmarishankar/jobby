import Cookies from 'js-cookie'
import {Component} from 'react'
import Profile from '../Profile'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {profileDetails: []}

  findJobs = async () => {
    const {history} = this.props
    history.push('/jobs')
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const url = 'https://apis.ccbp.in/profile'
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()

      this.setState({profileDetails: data})
    }
  }

  render() {
    const {profileDetails} = this.state

    return (
      <div>
        <Header />
        <div className="home-container">
          <h1 className="heading">Find The Job That First Your Life </h1>
          <button type="button" onClick={this.findJobs}>
            Find Jobs
          </button>
          <Profile information={profileDetails} />
        </div>
      </div>
    )
  }
}

export default Home
