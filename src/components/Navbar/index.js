import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <nav className={`navbar navbar-${theme}`}>
          <img className="site-logo" src={logoUrl} alt="website logo" />
          <ul className={`nav-links ${theme}`}>
            <li>
              <Link className="link-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-btn"
            type="button"
            onClick={() => toggleTheme()}
            data-testid="theme"
          >
            <img className="theme-img" src={themeUrl} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
