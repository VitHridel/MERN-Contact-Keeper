import { useContext, useEffect } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from "../../context/contact/contactContext"
import ContactItem from "./ContactItem"
import Spinner from './../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext)
    const { contacts, filtered, getContacts, loading } = contactContext

    useEffect(() => {
        getContacts()
        // eslint-disable-next-line
    }, [])

   /* <CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>))


<CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>))*/


    return (
        <div>
            {contacts && !loading ? (
                <TransitionGroup>
                {contacts.length > 0 && filtered === null ? (
                    contacts.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))
                    
                ) : filtered !== null && filtered.length > 0 ? (
                    filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))
                ) : filtered !== null && filtered.length === 0 ? <h4>No match found</h4>
                : contacts.length === 0 && <h4>You have no contacts here yet</h4>
                }
                </TransitionGroup>
                )
                : <Spinner />
            }
            
        </div>
    )
}

export default Contacts;