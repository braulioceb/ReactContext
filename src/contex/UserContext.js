import React, {Component} from 'react'
import {USERS} from './users'

const UserContext = React.createContext();
const {Provider, Consumer} = UserContext;

class UserContextProvider extends Component{
    state = {users: USERS}
    
    deleteUser =(userId) =>{
        this.setState((prevState) =>({
            users: prevState.users.filter((user )=> user.id !== userId)
        }))
    }

    render(){
        const {users} = this.state;
        const {children} = this.props;

        return (
            <Provider
                value={{
                    users,
                    deleteUser: this.deleteUser,
                }}
            >
                {children}
            </Provider>
        )
    }
}

export {UserContext, UserContextProvider, Consumer as UserContextConsumer}