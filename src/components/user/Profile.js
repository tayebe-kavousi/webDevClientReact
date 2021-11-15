import React from 'react';
  import UserService from '../../services/UserService';

export default class Profile extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           user:{}
        }
        this.userService = UserService.instance;
   }
    componentDidMount(){
        this.userService.profile()
        .then(result => this.setState({
            user:result
        }));
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.user.username}</h1> 
                <p>first Name: {this.state.user.firstName}</p>
                <p>last Name: {this.state.user.lastName}</p>
            </div>
        );
    } 
}


