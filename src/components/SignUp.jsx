import React, { Component } from 'react'

export class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const newAccount = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            address: e.target.elements.address.value,
        }
        console.log(newAccount);
    }


    render() {
        return (
            <div>
                <h1 className='text-center'>Register</h1>
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
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" name='phoneNumber' placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" name='address' placeholder="Address" required />
                    </div>
                    <button type="submit" className="btn btn-default submitBtn">Register</button>
                </form>
                <button type="submit" className="btn btn-default submitBtn2">Register with Google</button>
            </div>
        )
    }
}

export default SignUp
