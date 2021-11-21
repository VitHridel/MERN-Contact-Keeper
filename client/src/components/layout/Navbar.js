import PropTypes from 'prop-types';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ title }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={faIdCardAlt} /> {title}
            </h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>                    
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>                    
                </ul>
                
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper'
}

export default Navbar