import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { AlertContext } from '../../context/alert/AlertContext';
import { AuthContext } from '../../context/auth/authContext';

const Register = () => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext
    const { register, error, clearErrors, isAuthenticated } = authContext

    const navigate = useNavigate()

    useEffect(() => {
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
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = user

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({name, email, password})
            setUser({
                name: '',
                email: '',
                password: '',
                password2: ''
            })
        }
    }
    
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} required autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required autoComplete="off" minLength="6" />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} required autoComplete="off" minLength="6" />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

Register.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };

export default Register
