// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="header-nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-website-logo"
      />
      <div className="nav-menu-button-container">
        <ul className="nav-menu">
          <Link to="/" className="link-item-style">
            <li className="header-list-items">Home</li>
          </Link>
          <Link to="/products" className="link-item-style">
            <li className="header-list-items">Products</li>
          </Link>
          <Link to="/cart" className="link-item-style">
            <li className="header-list-items">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
