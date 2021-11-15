import React, { Component } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";


export default class Login extends Component{
    constructor(){
        super();
        this.userService = UserService.instance;
        this.state = {
            username:"",
            password:"",
            isLogged:false,
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
        this.userService.login(user)
        .then (result => {
           
                this.setState({user:user});
                this.setState({
                    isLogged : true
                })
                this.props.history.push(`./profile/${result.id}`);
            
        })
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
                        to={`/profile/:${this.state.username}`}
                        type="button"
                        id="loginBtn"
                        className="btn btn-primary wide-btn"
                        onClick={this.handleSigIn}>
                        Sign In
                    </button>
                </div>
                <div className="flex-container margined-div">
                    <hr />
                    <p>New user?</p>
                    <Link to="./register"><button className="btn btn-primary">Sign Up</button></Link>
                </div>
            </div>
        );
    }
}
