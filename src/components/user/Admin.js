import React, {Component} from 'react';
import UserService from '../../services/UserService';
import UserList from './UserList.js'


class Admin extends Component {
    constructor(){
        super();
        this.userService = UserService.instance;
        this.state = {
            newUser:{},
            users:[]
        }
    }

    componentDidMount(){
        this.userService.findAllUsers()
        .then(users => {
            this.setState({users:users});
        });
    }
    deleteUser = (userId)=>{
        this.userService.deleteUser(userId)
        .then(() => this.userService.findAllUsers())
        .then(users => this.setState({users: users}));
    }
    editUser = (userId)=>{
        this.userService.editUser(userId)
        .then(() => this.userService.findAllUsers())
        .then(users => this.setState({users: users}));
    }
  
    render(){
        return (
                <div className="container-fluid">
                    <h1>User Admin Table</h1>
                    <div className="table-responsive main-table">
                        <table className="table table-bordered table-sm table-hover table-striped">
                            <thead> 
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Date of birth</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <th>
                                        <select name="role" id="role">
                                            <option value="faculty">Faculty</option>
                                            <option value="student">Student</option>
                                        </select>
                                    </th>
                                    <th><input type="text" id="firstName" placeholder="Alice"/></th>
                                    <th><input type="text" id="lastName" placeholder="Wonderland"/></th>
                                    <th><input type="text" id="username" placeholder="alice"/></th>
                                    <th><input type="password" id="password" placeholder="******"/></th>
                                    <th><input type="email" id="email" placeholder="alice@wonderland.com"/></th>
                                    <th><input type="tel" id="phoneNumber" placeholder="+01234567890"/></th>
                                    <th><input type="date" id="dateOfBirth" placeholder="12-04-1989"/></th>
                                    <th>
                                        <button id="createBtn" className='btn btn-primary margined-btn admin-btn' style={{"margin-right":"10px"}}>Create</button>
                                        <button id="updateBtn" className='btn btn-primary margined-btn admin-btn'>Update</button>
                                    </th>
                                </tr>
                            </thead>
                            <UserList users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
                        </table>
                    </div>       
            </div>
        )
    }
}

export default Admin
