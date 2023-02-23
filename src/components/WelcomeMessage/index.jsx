import { useState, useEffect } from "react";

function WelcomeMessage() {

  const [userInfos, setUserInfos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/user/12/")
      .then(res => res.json())
      .then(data => setUserInfos(data.data.userInfos))
  }, [])

  const user = userInfos.firstName
  

  return (
    <>
        <h1>Bonjour <span>{user}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  )
}

export default WelcomeMessage