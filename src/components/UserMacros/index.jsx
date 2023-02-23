import { useState, useEffect } from "react";

function UserMacros() {

  const [userInfos, setUserInfos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/user/12/")
      .then(res => res.json())
      .then(data => setUserInfos(data.data.keyData))
  }, [])

  const userMacros = {
    "calories": userInfos.calorieCount,
    "protein": userInfos.calorieCount,
    "carbs": userInfos.carbohydrateCount,
    "lipid": userInfos.lipidCount
  }
  

  return (
    <>
        <ul>
          <li>{userMacros.calories} Calories</li>
          <li>{userMacros.protein} Proteines</li>
          <li>{userMacros.carbs} Glucides</li>
          <li>{userMacros.lipid} Lipides</li>
        </ul>
    </>
  )
}

export default UserMacros