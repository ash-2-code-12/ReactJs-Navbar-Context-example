import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const renderAbout = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      const aboutUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className={`about about-${theme} ${theme}`}>
          <img className="about-img" src={aboutUrl} alt="about" />
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

const About = () => (
  <>
    <Navbar />
    {renderAbout()}
  </>
)

export default About
