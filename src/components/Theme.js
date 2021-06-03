import React, {Component} from 'react';
import {ThemeContextConsumer} from "../contex/ThemeContext";

class Theme extends Component{
    render (){
        return (
        <ThemeContextConsumer>
            {(context) => ( 
                <div className = {`${context.theme}-Users-Container`}>
                    <button  onClick = {context.toggleTheme}>
                        Toggle Theme
                    </button>
                </div>
            )}
        </ThemeContextConsumer>
        )
    }
}

export default Theme;
