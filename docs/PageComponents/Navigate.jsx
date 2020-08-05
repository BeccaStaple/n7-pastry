import React from "react"
import '../index.css'
import Homepage from "../Pages/HomePage"
import About from "../Pages/About"
import Orders from "../Pages/Orders"
import Contact from "../Pages/Contact"

import { Switch, Route} from 'react-router-dom';


export default function Navigate() {
    return (
    
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/orders" component={Orders}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    
    
    );
}