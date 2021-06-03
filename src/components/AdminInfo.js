import React, {Component} from 'react'
import {AdminContextConsumer} from '../contex/AdminContext'
import AdminCard from './AdminCard'

class AdminInfo extends Component{
    render(){
        return(
            <AdminContextConsumer>
                {({adminName, isLoggedIn})=>(
                    <AdminCard name = {adminName} status = {`${isLoggedIn}`}/>
                )}
            </AdminContextConsumer>
        )
    }
}

export default AdminInfo