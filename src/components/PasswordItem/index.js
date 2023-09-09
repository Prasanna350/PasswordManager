import './index.css'

const PasswordItem = props => {
  const {passwordObj, isChecked, deleteFun} = props
  const {website, username, password, bgColor, id} = passwordObj

  const onDeleteFun = () => {
    deleteFun(id)
  }

  return (
    <li className="password-list-item">
      <p className={`profile-icon ${bgColor}`}>{website[0].toUpperCase()}</p>
      <div className="description-card">
        <p className="description">{website}</p>
        <p className="description">{username}</p>
        {isChecked ? (
          <p className="description">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteFun}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
