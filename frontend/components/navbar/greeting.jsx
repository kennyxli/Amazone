import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    
    const signin = () => (
        <nav className="outergreet">
            <button id="topbutton"><div id='topgreet'>Hello, Sign in</div>
                <div id='bottomgreet'>Account & Lists<img src={window.arrowURL}></img></div></button>
            <div className="greet">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up!</Link>
            </div>
        </nav>
    );
    const welcome = () => {
        return (
        <header className="nav-group">
                <h2 className="nav-name">Hello, {props.currentUser.name}!</h2>
            <button className="header-button" onClick={props.logout}>Log Out</button>
        </header>
        )
    };

    return props.currentUser ? welcome() : signin();
};


export default Greeting;