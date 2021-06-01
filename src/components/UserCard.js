import React, {Component} from 'react'
import {UserContext} from '../contex/UserContext'
import '../Card.css'

class UserCard extends Component{
    _handleOnDelete = () => {
        const { user } = this.props;
        const { deleteUser } = this.context;
        deleteUser( user.id );
    }
    
    render (){
        const {name, biography, avatar} = this.props.user;
        return (
            <div className = "Day-Card-Container">
                <img className = "avatar" src = {avatar}/>
                <div>
                    <h1 className = "name"> {name} </h1>
                    <p class = "description"> {biography}</p>
                    <div>
                        <button className="delete-button" onClick={this._handleOnDelete}>Delete User</button>
                    </div>
                </div>
            </div>
        )
    }
}


UserCard.contextType = UserContext
export default UserCard