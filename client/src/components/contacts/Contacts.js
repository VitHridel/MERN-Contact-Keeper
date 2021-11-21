import { useContext } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from "../../context/contact/contactContext"
import ContactItem from "./ContactItem"

const Contacts = () => {
    const contactContext = useContext(ContactContext)
    const { contacts, filtered } = contactContext

    return (
        <div>
            <TransitionGroup>
                {contacts.length === 0 ? <h4>Add Contacts to show them here</h4> 
                    : !filtered ? contacts.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>))
                    : filtered.length === 0 ? <h4>No match</h4>
                    : filtered.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>))
                }
            </TransitionGroup>
        </div>
    )
}

export default Contacts;