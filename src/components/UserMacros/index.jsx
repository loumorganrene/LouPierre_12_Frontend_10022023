import { useState, useEffect } from "react";
import calorieIcon from "../../assets/icons/calories-icon.svg"
import proteinIcon from "../../assets/icons/protein-icon.svg"
import glucideIcon from "../../assets/icons/carbs-icon.svg"
import lipidIcon from "../../assets/icons/fat-icon.svg"
import '../UserMacros/UserMacros.scss'

function UserMacros() {

  const [userInfos, setUserInfos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/user/12/")
      .then(res => res.json())
      .then(data => setUserInfos(data.data.keyData))
  }, [])

  const userMacros = {
    "calories": userInfos.calorieCount,
    "protein": userInfos.proteinCount,
    "carbs": userInfos.carbohydrateCount,
    "lipid": userInfos.lipidCount
  }


  return (
    <>
      <ul className="macrosList">
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