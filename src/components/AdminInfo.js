import React, {Component} from 'react'
import {AdminContextConsumer} from '../contex/AdminContext';
import {ThemeContextConsumer} from '../contex/ThemeContext'
import AdminCard from './AdminCard';
import '../Card.css'

class AdminInfo extends Component{
    render(){
        return(
            <ThemeContextConsumer>
                {({theme})=>(
                <AdminContextConsumer>
                    {({adminName, isLoggedIn})=>(
                        <div className = {`${theme}-Users-Container`}>
                            <AdminCard name = {adminName} status = {`${isLoggedIn}`}/>
                        </div>
                    )}
                </AdminContextConsumer>
                )}
            </ThemeContextConsumer>
        )
    }
}

export default AdminInfo