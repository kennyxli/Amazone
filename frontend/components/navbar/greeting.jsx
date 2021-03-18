import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        
        this.props.push('/login')
    }

    
    render() {
        const signin = () => (
            <nav className="outergreet">
                <button onClick={this.handleClick} id="topbutton"><div id='topgreet'>Hello, Sign in</div>
                    <div id='bottomgreet'>Account & Lists<img src={window.arrowURL}></img></div></button>
                <div className="greet">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up!</Link>
                </div>
            </nav>
        );
        const welcome = () => (
            
            <header className="nav-group">
                <button className="header-button" onClick={this.props.logout}>
                    <h2 id="greeting">Hello, {this.props.currentUser.name}</h2>
                    <div id='logingreet'>Account & Lists<img src={window.arrowURL}></img></div>
                </button>
            </header>
            
        )

    return this.props.currentUser ? welcome() : signin();
    }
};


export default Greeting;