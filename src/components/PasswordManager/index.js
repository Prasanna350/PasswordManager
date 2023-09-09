import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem/index'

const profileClassNamesList = [
  'green',
  'orange',
  'red',
  'black',
  'grey',
  'pink',
  'blue',
  'violet',
]

const initialPasswordsList = []

class PasswordManagement extends Component {
  state = {
    passwordsList: initialPasswordsList,
    website: '',
    username: '',
    password: '',
    isChecked: false,
    searchInput: '',
  }

  enterWebsite = event => {
    this.setState({website: event.target.value})
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  checkboxFun = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  deleteFun = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(eachObj => id !== eachObj.id)
    this.setState({passwordsList: filteredList})
  }

  searchFun = event => {
    this.setState({searchInput: event.target.value})
  }

  AddDetails = event => {
    event.preventDefault()
    const {website, username, password, passwordsList} = this.state
    const newPasswordObj = {
      id: uuidv4(),
      website,
      username,
      password,
      bgColor:
        profileClassNamesList[
          passwordsList.length % profileClassNamesList.length
        ],
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordObj],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      isChecked,
      searchInput,
    } = this.state
    const filteredList = passwordsList.filter(eachObject =>
      eachObject.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="card1-bg">
          <form className="card1-card" onSubmit={this.AddDetails}>
            <h1 className="card-head">Add New Password</h1>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-ele"
                onChange={this.enterWebsite}
                value={website}
              />
            </div>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-ele"
                onChange={this.enterUsername}
                value={username}
              />
            </div>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-ele"
                onChange={this.enterPassword}
                value={password}
              />
            </div>
            <div className="add-btn-card">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="card1-img lg-display"
            alt="password manager"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="card1-img sm-display"
            alt="password manager"
          />
        </div>
        <div className="card2-bg">
          <div className="card2-part1-div">
            <div className="your-password-name">
              <h1 className="card2-head">Your Passwords</h1>
              <p className="password-count">{passwordsList.length}</p>
            </div>

            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="input-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-ele"
                onChange={this.searchFun}
              />
            </div>
          </div>
          <hr />
          <div className="checkbox-div">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onClick={this.checkboxFun}
            />
            <label htmlFor="checkbox" className="password-label">
              {' '}
              Show Passwords
            </label>
          </div>
          <div className="passwords-container">
            {filteredList.length === 0 && (
              <div className="no-password-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-pswd-img"
                />
                <p className="no-pswd-stmt">No Passwords</p>
              </div>
            )}
            {filteredList.length > 0 && (
              <ul className="passwords-list-container">
                {filteredList.map(passwordObj => (
                  <PasswordItem
                    passwordObj={passwordObj}
                    isChecked={isChecked}
                    key={passwordObj.id}
                    deleteFun={this.deleteFun}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManagement
