import { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrent, clearCurrent, current } = contactContext

    const { _id, name, email, phone, type } = contact

    const handleDelete = () => {
        if(current && current.id === _id) {
            clearCurrent()
        }
        deleteContact(_id)
    }

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name} <span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <FontAwesomeIcon icon={faEnvelopeOpen} /> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <FontAwesomeIcon icon={faPhone} /> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
