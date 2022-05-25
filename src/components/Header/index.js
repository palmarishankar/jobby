import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
      alt="website"
    />
    <div>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
    <button type="button">Logout</button>
  </div>
)

export default Header
