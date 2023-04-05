import './Nav.scss'
import logo from '../../assets/img/logo.svg'
/**
 * Component for showing navigation bar.
 * @component
 */
function Nav() {

    return (
        <header>
            <img src={logo} alt="SportSee" />
            <nav className='navigation'>
                <ul>
                    <li>
                            Accueil
                    </li>
                    <li>
                            Profil
                    </li>
                    <li>
                            Réglage
                    </li>
                    <li>
                            Communauté
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav