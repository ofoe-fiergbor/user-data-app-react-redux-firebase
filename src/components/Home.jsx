import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../Redux/Actions/action'
import {deleteUser} from '../Redux/Actions/action'
import { Link } from 'react-router-dom'

export class Home extends Component {
    componentDidMount = ()=>{
        this.props.getAllUsers()
    }
    handleDelete = id =>{
        this.props.deleteUser(id)
    }
    render() {
        return (
            <div>
                <table className='table table-striped tc'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.address}</td>
                                        <td className='edit'>
                                            <Link to={'/edituser/'+ user.id}>
                                            Edit
                                            </Link></td>
                                        <td className='delete' onClick={()=>{this.handleDelete(user.id)}}>Delete</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        )
    }
}

const mstp = state => {
    // console.log(state);
    return {
        users: state.data.users
    }
}
export default connect(mstp, {getAllUsers, deleteUser})(Home)
