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
                    <ul className="greet-links">
                        <li><Link to="/login" id="greet-signin"><button>Sign in</button></Link></li>
                        <li><p>New customer?<Link to="/signup" id="start-link">Start here.</Link></p></li>
                    </ul>
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