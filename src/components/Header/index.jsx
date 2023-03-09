import '../Header/Header.scss'

function Header({data}) {
  
  return (
    <div className="welcomeMessage">
        <h1>Bonjour <span className="userFirstName">{data}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Header