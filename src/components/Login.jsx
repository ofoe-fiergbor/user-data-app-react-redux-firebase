import React, { Component } from 'react'

export class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const email= e.target.elements.email.value;
        const password= e.target.elements.password.value;

        console.log(password, email);
    }


    render() {
        return (
            <div>
                <h1 className='text-center'>Login</h1>
                <form className='tc' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name='email' placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name='password' placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-default submitBtn">Register</button>
                </form>
                <button type="submit" className="btn btn-default submitBtn2">Login With Google</button>
            </div>
        )
    }
}

export default SignUp
