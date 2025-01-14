import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const renderNotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <div className={`not-found not-found-${theme} ${theme}`}>
          <img
            className="not-found-img"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <h1>Lost Your Way?</h1>
          <p>We cannot seem to find the page you are looking for.</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

const NotFound = () => (
  <>
    <Navbar />
    {renderNotFound()}
  </>
)

export default NotFound
