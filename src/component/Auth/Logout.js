import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <>
                <button className='btn btn-secondary me-2' onClick={() => logout()}>Sign Out</button>
                <Link to='profile'><button className='btn btn-secondary'>User Profile</button></Link>
            </>
        )
    )
}

export default Logout