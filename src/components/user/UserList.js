
import React from 'react';
function UserRow({user, number, deleteUser, editUser}) {
    return(
        <tr>
            <td>{number<10?`0${number}`:number}</td>
            <td contentEditable>{user.role}</td>
            <td contentEditable>{user.firstName}</td>
            <td contentEditable>{user.lastName}</td>
            <td contentEditable>{user.username}</td>
            <td contentEditable>{user.password}</td>
            <td contentEditable>{user.email}</td>
            <td contentEditable>{user.phoneNumber}</td>
            <td contentEditable>{user.dateOfBirth}</td>
            <td><button className="btn btn-primary" style={{"margin-right":"10px"}} onChange={()=>editUser(user.id)} onClick={()=>deleteUser(user.id)}>delete</button><button className="btn btn-primary">edit</button></td> 
        </tr>
    )
}
function UserList({users,deleteUser, editUser}) {
    return (
        <tbody>
            {users.map((user,i) => {return(<UserRow user={user} number={i+1} key={i} deleteUser={deleteUser} editUser={editUser}/>)})}
        </tbody>
    )
}

export default UserList