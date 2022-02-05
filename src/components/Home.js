import React from "react";
import '../App.css';

import Logo from "./../image/logo.png";
import { Link } from 'react-router-dom'
const goto = () => { }

function Home() {
    return (
        <center>
            <div className="container logo">

                <img src={Logo} alt="logo" />
                <Link to='/login'>
                    <button className="signin" onClick={goto}>Login to Use</button>
                </Link>
                <Link to='/Signup'>
                    <button className="signin" >Signup</button>
                </Link>
            </div>
        </center>
    );
}

export default Home