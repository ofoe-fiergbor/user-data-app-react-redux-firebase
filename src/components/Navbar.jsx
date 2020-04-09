import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <nav>
                <h1>User Data App</h1>
                <ul className='nav-links'>
                    <Link to='/' id='link'>
                        <li>Home</li>
                    </Link>
                    <Link to='/adduser' id='link'>
                        <li>Add User</li>
                    </Link>
                    <Link to='/login' id='link'>
                        <li>Login</li>
                    </Link>
                    <Link to='/signup' id='link'>
                        <li>Sign Up</li>
                    </Link>
                    <li className='initials'>od</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
