import calorieIcon from "../../assets/icons/calories-icon.svg"
import proteinIcon from "../../assets/icons/protein-icon.svg"
import glucideIcon from "../../assets/icons/carbs-icon.svg"
import lipidIcon from "../../assets/icons/fat-icon.svg"
import '../UserMacros/UserMacros.scss'
import PropTypes from 'prop-types'

function UserMacros({ macros }) {
  return (
    <>
      <ul className="macrosList--container">
        <li>
          <img src={calorieIcon} alt="calorie count icon" />
          <div className="macrosLabel">
            <p>{macros.calories} kCal</p>
            <label>Calories</label>
          </div>
        </li>
        <li>
          <img src={proteinIcon} alt="protein count icon" />
          <div className="macrosLabel">
            <p>{macros.protein}g</p>
            <label>Proteines</label>
          </div>
        </li>
        <li>
          <img src={glucideIcon} alt="carbs count icon" />
          <div className="macrosLabel">
            <p>{macros.carbs}g</p>
            <label>Glucides</label>
          </div>
        </li>
        <li>
          <img src={lipidIcon} alt="lipid count icon" />
          <div className="macrosLabel">
            <p>{macros.lipid}g</p>
            <label>Lipides</label>
          </div>
        </li>
      </ul>
    </>
  )
}

UserMacros.propTypes = {
  macros: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    lipid: PropTypes.number.isRequired,
  })
}

export default UserMacros