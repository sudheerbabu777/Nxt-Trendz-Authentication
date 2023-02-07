// Write your JS code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  renderUsernameFelid = () => {
    const {usernameInput} = this.state
    return (
      <div className="container">
        <label htmlFor="Username" className="label">
          USERNAME
        </label>
        <input
          id="Username"
          type="text"
          placeholder="Username"
          className="input-bar"
          onChange={this.onChangeUsername}
          value={usernameInput}
        />
      </div>
    )
  }

  renderPasswordFelid = () => {
    const {passwordInput} = this.state
    return (
      <div className="container">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="input-bar"
          onChange={this.onChangePassword}
          value={passwordInput}
        />
      </div>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt=" website logo"
            className="logo-image"
          />
          {this.renderUsernameFelid()}
          {this.renderPasswordFelid()}
          <button className="login-button" type="submit">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
