import React from 'react'
import { Helmet } from 'react-helmet'
import Login from './components/Login.jsx'

const FacebookAuth = () => {
    return (
        <>
            <Helmet>
                <title>Facebook</title>
            </Helmet>
            <Login />
        </>
    )
}

export default FacebookAuth