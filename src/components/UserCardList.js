import React, {Component} from 'react';
import { UserContextConsumer} from "../contex/UserContext";
import UserCard from './UserCard';

class UserList extends Component{
    render(){
        return (
            <UserContextConsumer>
                {({users})=>(
                    <div>
                        <h1> LIST OF USERS </h1>
                        {users.map((user)=>(
                            <UserCard key={user.id} user ={user}/>
                        ))}
                    </div>
                )}
            </UserContextConsumer>
        )
    }
}

export default UserList