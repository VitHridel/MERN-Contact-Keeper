import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './../../context/auth/authContext';

const PrivateRoute = ({ children }) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated } = authContext

    //const navigate = useNavigate()
    //isAuthenticated && loading ? <Outlet /> : <Navigate to='/login' /> //navigate('/login')
    /*<Route {...rest}
                render={props => !isAuthenticated && !loading ? <Navigate to='/login' />
                : <Component {...props} /> }
            /> */

           // isAuthenticated ? <Route {...rest} render={props => <Component {...props} />} /> : navigate('/login')
    return (
        isAuthenticated ? children : <Navigate replace to='/login' />    
    )
}

export default PrivateRoute
