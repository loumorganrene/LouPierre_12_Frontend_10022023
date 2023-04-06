import logo from '../../assets/img/logo.svg'
import './Nav.scss'

/**
 * A React component that renders the navigation bar.
 *
 * @returns { JSX.Element } The JSX element for the navigation bar.
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