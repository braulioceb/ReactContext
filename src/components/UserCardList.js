import React, {Component} from 'react';
import {UserContextConsumer} from "../contex/UserContext";
import {ThemeContextConsumer} from "../contex/ThemeContext";
import {AdminContextConsumer} from "../contex/AdminContext";

import UserCard from './UserCard';

class UserList extends Component{
    render(){
        return (
            <ThemeContextConsumer>
                {({theme}) => (    
                    <UserContextConsumer>
                        {({users})=>(
                            <AdminContextConsumer>
                                {({isLoggedIn})=>(
                                    <div className = {`${theme}-Users-Container`}>
                                    <h1> LIST OF USERS </h1>
                                    {users.map((user)=>(
                                        <UserCard key={user.id} user ={user} status = {isLoggedIn}/>
                                    ))}
                                </div>
                                )}
                            </AdminContextConsumer>
                        )}
                    </UserContextConsumer>
                )}
            </ThemeContextConsumer>
        )
    }
}

export default UserList