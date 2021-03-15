import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const signin = () => (
        <nav className="login">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const welcome = () => (
        <header className="nav-group">
            <h2 className="nav-name">Hello, {props.currentUser.name}!</h2>
            <button className="header-button" onClick={props.logout}>Log Out</button>
        </header>
    );

    return props.currentUser ? welcome() : signin();
};


export default Greeting;