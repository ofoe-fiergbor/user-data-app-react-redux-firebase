import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';


export class Navbar extends Component {
    render() {
        
        const links = this.props.auth.uid? <SignInLinks/>:<SignOutLinks/>
        return (
            <nav>
                <h1>User Data App</h1>
                <ul className='nav-links'>
                    {links}
                </ul>
            </nav>
        )
    }
}
const mstp = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mstp)(Navbar)
