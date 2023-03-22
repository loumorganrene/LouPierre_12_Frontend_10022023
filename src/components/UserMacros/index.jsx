import calorieIcon from "../../assets/icons/calories-icon.svg"
import proteinIcon from "../../assets/icons/protein-icon.svg"
import glucideIcon from "../../assets/icons/carbs-icon.svg"
import lipidIcon from "../../assets/icons/fat-icon.svg"
import '../UserMacros/UserMacros.scss'

function UserMacros({macros}) {

  const userMacros = {
    "calories": macros.macros.calorieCount,
    "protein": macros.macros.proteinCount,
    "carbs": macros.macros.carbohydrateCount,
    "lipid": macros.macros.lipidCount
  }

  return (
    <>
      <ul className="macrosList--container">
        <li>
          <img src={calorieIcon} alt="calorie count icon" />
          <div className="macrosLabel">
            <p>{userMacros.calories} kCal</p>
            <label>Calories</label>
          </div>
        </li>
        <li>
          <img src={proteinIcon} alt="protein count icon" />
          <div className="macrosLabel">
            <p>{userMacros.protein}g</p>
            <label>Proteines</label>
          </div>
        </li>
        <li>
          <img src={glucideIcon} alt="carbs count icon" />
          <div className="macrosLabel">
            <p>{userMacros.carbs}g</p>
            <label>Glucides</label>
          </div>
        </li>
        <li>
          <img src={lipidIcon} alt="lipid count icon" />
          <div className="macrosLabel">
            <p>{userMacros.lipid}g</p>
            <label>Lipides</label>
          </div>
        </li>
      </ul>
    </>
  )
}

export default UserMacros