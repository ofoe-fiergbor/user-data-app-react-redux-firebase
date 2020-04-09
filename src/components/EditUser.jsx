import React, { Component } from 'react'
import { updateUser } from '../Redux/Actions/action'
import { connect } from 'react-redux'

export class EditUser extends Component {
    handleSubmit = e => {
        e.preventDefault()
        let user = {
            id: this.props.match.params.id,
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            address: e.target.elements.address.value,
        }
        this.props.updateUser(user)
        this.props.history.push('/')
    }


    render() {
        const id = this.props.match.params.id
        let user = this.props.users.find(item => {
            return item.id === id
        })
        return (
            <div>
                <h1 className='text-center'>Add User</h1>
                <form className='tc' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label>First Name</label>
                            <input type="text" className="form-control" name='firstName' defaultValue={user.firstName} />
                        </div>
                        <div className="form-group col-md-7">
                            <label>Last Name</label>
                            <input type="text" className="form-control" name='lastName' defaultValue={user.lastName} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name='email' defaultValue={user.email} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" name='phoneNumber' defaultValue={user.phoneNumber} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" name='address' defaultValue={user.address} />
                    </div>
                    <button type="submit" className="btn btn-default submitBtn">Update User</button>
                </form>
            </div>
        )
    }
}
const mstp = state => {
    return {
        users: state.data.users
    }
}

export default connect(mstp, { updateUser })(EditUser)
