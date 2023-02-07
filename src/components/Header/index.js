// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-logo"
    />
    <ul className="nav-bar-container">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products </li>
      <li className="nav-item">Cart</li>
      <li>
        <button className="logout" type="button">
          Log out
        </button>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-image"
        />
      </li>
    </ul>
  </nav>
)

export default Header
