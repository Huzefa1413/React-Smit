import React from 'react'
import logo from './assets/facebook.png'
import logout from './assets/logout.png'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/facebookwithfirebaseauthentication')
        }).catch((error) => {
            console.error(error);
        });

    }
    return (
        <div className='navbar'>
            <div>
                <div className="logoimage"><img src={logo} alt="" /></div>
                <div className="logoname">Facebook</div>
            </div>
            <div>
                <img src={logout} alt="logout" onClick={logoutHandler} />
            </div>
        </div>
    )
}

export default Navbar