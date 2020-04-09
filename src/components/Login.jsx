import React, { Component } from 'react'
import { login, authWithGoogle } from '../Redux/Actions/authAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const email= e.target.elements.email.value;
        const password= e.target.elements.password.value;
        this.props.login(email, password)
    }


    render() {
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div>
                <h1 className='text-center'>Login</h1>
                {authError? <p className='text-center text-danger'>{authError}</p> : null}
                <form className='tc' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name='email' placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name='password' placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-default submitBtn">Login</button>
                </form>
                <button type="submit" className="btn btn-default submitBtn2" onClick={this.props.authWithGoogle}>Login With Google</button>
            </div>
        )
    }
}
const mstp=state=>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
export default connect(mstp, {login, authWithGoogle})(SignUp)
