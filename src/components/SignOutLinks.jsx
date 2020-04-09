import React from 'react'
import { Link } from 'react-router-dom'

function SignOutLinks() {
    return (
        <div className='links'>
            <Link to='/login' id='link'>
                <li >Login</li>
            </Link>
            <Link to='/signup' id='link'>
                <li>Sign Up</li>
            </Link>
        </div>
    )
}
export default SignOutLinks

