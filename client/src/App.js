import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertContextProvider from './context/alert/AlertContext';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertContextProvider>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/register' element={<Register />} />
                  <Route exact path='/login' element={<Login />} />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertContextProvider>
      </ContactState>
    </AuthState>
  );
}

export default App;