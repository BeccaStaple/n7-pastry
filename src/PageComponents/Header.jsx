import React from "react"
import Logo from "./N7-logo-v4-clipped.png"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <img 
                    src={Logo} 
                    alt="N7 Logo"
                    width="18%"
                />
            </div>
            
        );
    }
}