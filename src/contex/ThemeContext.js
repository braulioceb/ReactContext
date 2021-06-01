import React, {Component} from 'react';

const {Provider, Consumer} = React.createContext();

class ThemeContextProvider extends Component {
    state = {theme: "Day", isDay: true};

    toggleTheme = ()=>{
        this.setState(({theme}) => ({
               theme: theme === "Day" ? "Nigth" : "Day", 
        }))
    }
    render (){
        const {theme} = this.state
        return (
            <Provider value={{
                theme,
                toggleTheme: this.toggleTheme
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
