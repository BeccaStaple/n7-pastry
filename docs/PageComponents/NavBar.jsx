import React from "react";
import "../index.css";

import { Link } from "react-router-dom";
import Navigate from "./Navigate";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";


export default function HomeNavBar() {


    return (
        <div>
            
            <div>
                <div className="navBarStyle">

                <Link className="navBarStyleLinks" to="/">Home</Link>

                <Link className="navBarStyleLinks" to="/about">About</Link>

                <Link className="navBarStyleLinks" to="/orders">Orders</Link>

                <Link className="navBarStyleLinks" to="/contact">Contact</Link>

                </div>
            </div>
            <hr/>
            <div>
                <Navigate />
            </div>


        </div>
    );



}