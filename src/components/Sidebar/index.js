import './index.scss';
import { Link, NavLink } from 'react-router-dom';
// import Chorro from '../../assets/images/chorro.png'
// import LogoSubtitle from '../../assets/images/coollogo_com-33821757.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={} alt='logo' /> */}
            {/* <img src={LogoSubtitle} alt='Gabriel' /> */}
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#e2e4f6' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#e2e4f6' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#e2e4f6' />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferreer' href='https://www.linkedin.com/in/gabriel-f-956163131/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#e2e4f6' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferreer' href='https://github.com/lamphead18'>
                    <FontAwesomeIcon icon={faGithub} color='#e2e4f6' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar