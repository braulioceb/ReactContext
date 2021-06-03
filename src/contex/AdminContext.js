import React, {Children, Component} from 'react'


const AdminContext = React.createContext();
const {Provider, Consumer} = AdminContext;

class AdminContextProvider extends Component{
    state = {adminId: 12345 ,adminName: "Administrados 11245",
    password: 12345,
    isLoggedIn: true};

    logStatus = ()=>{
        this.setState(({isLoggedIn})=>({
            isLoggedIn: isLoggedIn === true ? false : true  
        }))
    }

    render(){
        const {adminName, isLoggedIn} = this.state;
        const {children} = this.props;
        return(
            <Provider
                value = {{
                    adminName,
                isLoggedIn,
                logStatus: this.logStatus
            }
                }
            >
                {children}
            </Provider>
        )

    }
}

export {AdminContext, AdminContextProvider, Consumer as AdminContextConsumer}
