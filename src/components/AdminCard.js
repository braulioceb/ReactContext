import React, {Component} from 'react'
import {AdminContext} from '../contex/AdminContext'

class AdminCard extends Component{     
    _handleRequest = ()=>{
        const {logStatus} = this.context;
        logStatus();
    }  

    render(){
        return (
            <div>
                {this.context.isLoggedIn === true ? 
                    <p> Inicié sesión </p> : 
                    <React.Fragment>
                    <p> {this.props.name}   </p>
                    <p>  Se encuentra conectado </p>
                    </React.Fragment>
                    }
                <button  onClick = {this._handleRequest}> Iniciar/Cerrar sesión </button>
            </div>
        )
    }
}

AdminCard.contextType = AdminContext
export default AdminCard