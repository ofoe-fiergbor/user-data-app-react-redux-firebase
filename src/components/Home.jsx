import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../Redux/Actions/action'
import {deleteUser} from '../Redux/Actions/action'
import { Link, Redirect } from 'react-router-dom'

export class Home extends Component {
    componentDidMount = ()=>{
        this.props.getAllUsers()
    }
    handleDelete = id =>{
        this.props.deleteUser(id)
    }
    render() {
        if(!this.props.auth.uid) return <Redirect to='/login'/>
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
                    {this.props.loading && <h5>Loading...</h5>}
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
        users: state.data.users,
        loading: state.data.loading,
        auth: state.firebase.auth
    }
}
export default connect(mstp, {getAllUsers, deleteUser})(Home)
