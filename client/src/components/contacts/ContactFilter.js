import { useContext, useRef, useEffect, /*useState*/ } from 'react';
import ContactContext from "../../context/contact/contactContext"

const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const { filterContacts, clearFilter, filtered } = contactContext

    const text = useRef('')

    /* bez použití useRef 
    const [ text, setText ] = useState('')
    
    useEffect(() => {
        if(text === '') {
            clearFilter()
        } else {
            filterContacts(text)
        }
    }, [text]) */

    useEffect(() => {
        if(filtered === null) {
            text.current.value = ''
        }
    }, [filtered, text])

    const onChange = e => {
        text.current.value !== '' ? filterContacts(e.target.value) : clearFilter()
    }

    return (
        <form>
            <input ref={text} type="text" /*value={text}*/ placeholder="Search contact" onChange={onChange /*  (e) => setText(e.currentTarget.value)*/} />
        </form>
    )
}

export default ContactFilter
