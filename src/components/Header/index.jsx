import '../Header/Header.scss'

function Header({data}) {
  
  return (
    <div className="header">
        <h1>Bonjour <span className="userFirstName">{data}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Header