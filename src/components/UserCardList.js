import React, {Component} from 'react';
import {UserContextConsumer} from "../contex/UserContext";
import {ThemeContextConsumer} from "../contex/ThemeContext";

import UserCard from './UserCard';

class UserList extends Component{
    render(){
        return (
            <ThemeContextConsumer>
                {({theme}) => (    
                    <UserContextConsumer>
                        {({users})=>(
                            <div className = {`${theme}-Users-Conatiner`}>
                                <h1> LIST OF USERS </h1>
                                {users.map((user)=>(
                                    <UserCard key={user.id} user ={user}/>
                                ))}
                            </div>
                        )}
                    </UserContextConsumer>
                )}
            </ThemeContextConsumer>
        )
    }
}

export default UserList