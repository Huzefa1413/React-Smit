import React from 'react'
import './Facebook.css';
import AddPosts from './components/AddPosts.jsx';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
const Facebook = () => {
    return (
        <div>
            <Helmet>
                <title>Facebook</title>
            </Helmet>
            <Navbar />
            <AddPosts />
        </div>
    )
}

export default Facebook