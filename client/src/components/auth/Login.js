import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../../context/alert/AlertContext';
import { AuthContext } from '../../context/auth/authContext';

const Login = () => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext
    const { login, error, clearErrors, isAuthenticated, loadUser } = authContext

    const navigate = useNavigate()

    useEffect(() => {     
        /*setTimeout(() => {
            if(localStorage.getItem('token')) {
                loadUser()
            }
        }, 1000); */
        if(localStorage.getItem('token')) {
            loadUser()
        }
        
        if(isAuthenticated) {
           navigate('/')
        }

        if(error) {
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated])

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })
    const {  email, password } = user

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(user)
        setUser({
            email: '',
            password: ''
        })
    }
    
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login
