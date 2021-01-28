import React, { Component } from 'react'
import { connect } from 'react-redux'
import {register, authWithGoogle} from '../Redux/Actions/authAction'
import { Redirect } from 'react-router-dom'
export class SignUp extends Component {
        handleSubmit = e => {
            e.preventDefault()
            const newAccount = {
                firstName: e.target.elements.firstName.value,
                lastName: e.target.elements.lastName.value,
                email: e.target.elements.email.value,
                password: e.target.elements.password.value,
            }
        this.props.register(newAccount)
        
    }


    render() {
        const {auth, authError} = this.props

        if(auth.uid) return <Redirect to='/'/>
        return (
            <div>
                <h1 className='text-center'>Register</h1>
                {authError? <p className='text-center text-danger'>{authError}</p> : null}
                <form className='tc' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label>First Name</label>
                            <input type="text" className="form-control" name='firstName' placeholder="First Name" required />
                        </div>
                        <div className="form-group col-md-7">
                            <label>Last Name</label>
                            <input type="text" className="form-control" name='lastName' placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name='email' placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name='password' placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-default submitBtn">Register</button>
                </form>
                <button type="submit" className="btn btn-default submitBtn2" onClick={this.props.authWithGoogle}>Register with Google</button>
            </div>
        )
    }
}
const mstp =state =>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

export default connect(mstp, {register, authWithGoogle})(SignUp)
