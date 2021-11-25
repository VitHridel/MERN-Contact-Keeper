import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/authContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { isAuthenticated, logout } = authContext
    
    const handleLogout = () => {
        contactContext.logoutClearContacts()
        logout()
    }

    return (
        <div className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={faIdCardAlt} /> {title}
            </h1>
            <nav>
                <ul>                    
                    {isAuthenticated ? <li><Link to='/login' onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
                    : (
                        <>
                            <li><Link to='/register'>Register</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </>
                    ) }                    
                </ul>
                
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Contact Keeper'
}

export default Navbar