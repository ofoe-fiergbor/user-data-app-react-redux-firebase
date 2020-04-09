import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../Redux/Actions/authAction'

function SignInLinks(props) {
    return (
        <div className='linkz'>
            <Link to='/' id='link'>
                <li>Home</li>
            </Link>
            <Link to='/adduser' id='link'>
                <li>Add User</li>
            </Link>
            <div id='link'>
                <li onClick={props.logout}>Logout</li>
            </div>
            <li className='initials'>od</li>
        </div>
    )
}
export default connect(null, { logout })(SignInLinks)

