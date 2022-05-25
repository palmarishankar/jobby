import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {userInput: '', password: '', showErrorMsg: false, errorMsg: ''}

  userInput = event => {
    this.setState({userInput: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  successLoginApp = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({showErrorMsg: false})
  }

  failureLoginApp = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  loginForm = async event => {
    event.preventDefault()
    const {userInput, password} = this.state
    const userDetails = {username: userInput, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.successLoginApp(data.jwt_token)
    } else {
      this.failureLoginApp(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.loginForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website"
          />
          <label className="user-input" htmlFor="userInput">
            USERNAME
          </label>
          <br />
          <input
            id="userInput"
            type="text"
            placeholder="Username"
            onChange={this.userInput}
          />
          <br />
          <label className="password" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            id="password"
            placeholder="Password"
            type="password"
            onChange={this.password}
          />
          <br />
          <button className="button" type="submit">
            Login
          </button>
          {showErrorMsg && <p>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
