import '../Header/Header.scss'
import PropTypes from 'prop-types';

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

