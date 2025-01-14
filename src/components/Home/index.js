import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const renderHome = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div className={`home home-${theme} ${theme}`}>
          <img className="home-img" src={homeUrl} alt="home" />
          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

const Home = () => (
  <>
    <Navbar />
    {renderHome()}
  </>
)

export default Home
