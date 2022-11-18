import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="body">
            <div className="maindiv">
                <div>
                    <Link target={"_blank"} to="/cv">CV</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/loginform">Login Form</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/newswebsite">News Website</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/newswebsitewithapi">News Website with Api</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/darklightmode">Dark Light Mode</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/facebookpost">Facebook Post</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/facebookloginsignupwithposting">Facebook Login Signup with Posting</Link>
                </div>
                <div>
                    <Link target={"_blank"} to="/facebookwithfirebaseauthentication">Facebook with Firebase Authentication</Link>
                </div>
            </div>
        </div>
    )
}

export default Home