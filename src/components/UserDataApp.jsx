import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import AddUser from './AddUser'
import EditUser from './EditUser'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'



export class UserDataApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/addUser' exact component={AddUser} />
                    <Route path='/edituser/:id' exact component = {EditUser} />
                    <Route path ='/login' exact component={Login}/>
                    <Route path ='/signup' exact component={SignUp}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default UserDataApp
