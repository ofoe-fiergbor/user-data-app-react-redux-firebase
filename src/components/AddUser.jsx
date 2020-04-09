import React, { Component } from 'react'
import { addUser } from '../Redux/Actions/action'
import { connect } from 'react-redux'

export class AddUser extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            id: Math.random().toString(36).substr(2, 5),
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            address: e.target.elements.address.value,
        }
        this.props.addUser(newUser);
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <h1 className='text-center'>Add User</h1>
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
                    <button type="submit" className="btn btn-default submitBtn">Add User</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addUser})(AddUser)
