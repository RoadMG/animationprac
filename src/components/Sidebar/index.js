import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faSkype, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logos} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
            </Link>

            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://mingyukil.netlify.app'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://youtube.com'>
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='skype.com'>
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;