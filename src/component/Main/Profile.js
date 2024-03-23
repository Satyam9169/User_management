import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <div className='container py-5'>
            {isAuthenticated &&
                <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                    <h1 className='text-center'>User's Details</h1>
                    <div className="row g-0 py-5">
                        <div className="col-md-4">
                            {user.picture && <img src={user.picture} width={250} className="img-fluid rounded-start" alt={user.name} />}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p className="card-text">
                                    {Object.keys(user).map((item, index) => <li key={index}>
                                        {item} :  {user[item]}
                                    </li>)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Profile