import './Sidebar.scss'
import meditating from '../../assets/img/meditating.svg'
import swimming from '../../assets/img/swimming.svg'
import cycling from '../../assets/img/cycling.svg'
import weightlifting from '../../assets/img/weightlifting.svg'

function Sidebar() {

    return (
        <aside>
            <nav className='activity'>
                <ul>
                    <li>
                        <img src={meditating} alt="Meditation" />
                    </li>
                    <li>
                        <img src={swimming} alt="Natation" />
                    </li>
                    <li>
                        <img src={cycling} alt="Vélo" />
                    </li>
                    <li>
                        <img src={weightlifting} alt="Musculation" />
                    </li>
                </ul>
            </nav>
            <p className='copyright'>Copyright, Sportsee 2020</p>
        </aside>
    )
}

export default Sidebar