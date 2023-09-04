// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', wrongPass: false}

  onChangingUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangingPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    console.log(history)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  renderUsernameField = () => {
    const {userName} = this.state
    return (
      <>
        <label className="login-input-label" htmlFor="userName">
          USERNAME
        </label>
        <input
          className="login-input"
          type="text"
          id="userName"
          placeholder="Username"
          value={userName}
          onChange={this.onChangingUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="login-input-label" htmlFor="userPassword">
          PASSWORD
        </label>
        <input
          className="login-input"
          type="password"
          id="userPassword"
          placeholder="Password"
          value={password}
          onChange={this.onChangingPassword}
        />
      </>
    )
  }

  render() {
    const {wrongPass} = this.state
    return (
      <div className="login-page-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-page-image"
        />
        <form className="login-page-form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-logo"
          />
          <div className="login-input-container">
            {this.renderUsernameField()}
          </div>
          <div className="login-input-container">
            {this.renderPasswordField()}
          </div>
          <div className="login-btn-container">
            <button className="login-button" type="submit">
              Login
            </button>
            {wrongPass && (
              <p className="wrong-pass-text">
                *Username and Password didn`&lsquo;`t match
              </p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
