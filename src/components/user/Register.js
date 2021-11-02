import React, {Component} from "react";
import UserService from "../../services/UserService";


export class Register extends Component{
    constructor(){
        super();
        this.userService = UserService.instance;
        this.state ={
            username:"",
            password: "",
            password2: "",
            role: "",
            user:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange = (event)=>{
        if(event.target.id === "password"){
            this.setState({
                password:event.target.value
            })
        } else if(event.target.id === "password2"){
            this.setState({
                password2:event.target.value
            })
        } else if(event.target.id === "username"){
            this.setState({
                username:event.target.value.toLowerCase()
            })
        } else if(event.target.id=== "student"){
            this.setState({
                role:"student"
            })
        }else if(event.target.id=== "faculty"){
            this.setState({
                role:"faculty"
            })
        }
    }
    handleClick = ()=>{
        const user={ 
            "username":this.state.username,
            "password":this.state.password,
            "password2":this.state.password2,
            "role": this.state.role
        };
        this.setState({user:user});
        this.userService.register(user)
        .then((result) =>console.log(result));
    }

    render(){
        return(
            <div className="container centered-card">
                <h1>Sign Up</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Mario"
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text"
                        id="password"
                        className="form-control"
                        placeholder="w#78ncM9k@mks"
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <label htmlFor="password2">Password</label>
                    <input 
                        type="text"
                        id="password2"
                        className="form-control"
                        placeholder="w#78ncM9k@mks"
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <span>Are you a: </span>
                    <input 
                        type="radio" 
                        id="student" 
                        name="role"
                        value="student"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="student">Student</label>
                    <input 
                        type="radio" 
                        id="faculty" 
                        name="role"
                        value="faculty"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="faculty">Faculty</label>
                </div> 
                <div>
                    <button 
                        id="registerBtn" 
                        className="btn btn-primary wide-btn"
                        onClick={this.handleClick}>
                        Sign Up
                    </button>
                </div>
                <div className="margined-div">
                    <p>Already have an account? <a href="../login/login.template.client.html">Login</a></p>
                </div>          
            </div>
        );
}
}



