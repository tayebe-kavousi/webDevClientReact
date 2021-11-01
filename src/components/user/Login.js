import React, { Component } from "react";
import UserService from "../../services/UserService";


export class Login extends Component{
    constructor(){
        super();
        this.userService = UserService.instance;
        this.state = {
            username:"",
            password:"",
            user:{}
        }
        this.handleSigIn = this.handleSigIn.bind(this);
    }

    handleChange =(event)=>{
         if(event.target.id === "password"){
            this.setState({
                password:event.target.value
            })
        } else if(event.target.id === "username"){
            this.setState({
                username:event.target.value.toLowerCase()
            })
        }
    }

    handleSigIn = () => {
        const user={ 
            "username":this.state.username,
            "password":this.state.password
        };
        this.setState({user:user});
        this.userService.login(user)
        .then((result) =>console.log(result));
    }

    render(){
        return(
            <div className="container centered-card"> 
                <h1>sign In</h1>
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
                    <button 
                        type="button"
                        id="loginBtn"
                        className="btn btn-primary wide-btn"
                        onClick={this.handleSigIn}>
                        Sign In
                    </button>
                </div>
                <div className="flex-container margined-div">
                    <a href="#">Forget password?</a>
                    <a href="../register/register.template.client.html">Sign Up</a>
                </div>
            </div>
        );
    }
}
