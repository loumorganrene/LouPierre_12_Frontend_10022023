import PropTypes from 'prop-types'
import '../Header/Header.scss'

/**
 * A React component that renders a customized welcome message.
 *
 * @param { string } username - The user's firstname.
 * @returns { JSX.Element } The JSX element for the customized welcome message.
 * 
 * @example
 * const user = { firstName: "Paul", lastName: "Petit", age: 23 }
 * 
 * <Header username= { user.firstName } />
 */
function Header({ username }) {
  return (
    <div className="header">
      <h1>Bonjour <span className="userFirstName">{username}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

Header.propTypes = {
  username: PropTypes.string.isRequired
}

export default Header

