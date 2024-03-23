import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Logout from '../Auth/Logout'

const Header = () => {
    const [login, setLogin] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Web App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" to={'/logout'}>{<Logout />}</button>
                            </li><br />
                            <li className="nav-item">
                                <button className="nav-link" to={'/login'}> {<Login />} </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header