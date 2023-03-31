import '../Header/Header.scss'
import PropTypes from 'prop-types';
/**
 * Component for showing user's welcome message.
 * @component
 * @param {string} username - User's first name.
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

