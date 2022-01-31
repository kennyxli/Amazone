import React from 'react';
import { Link } from 'react-router-dom';


function Greeting (props){
    const handleClick = (e) => {
        e.preventDefault()
        props.deleteCart()
        props.logout()
        .then(() => props.push('/login'))
    }
    const handleSign = () => {
        props.push('/login')
    }
    const accountRender = () => (
        <ul className="greet-links">
            <ul className="greet-shopping-list">
                <h1>Your Lists</h1>
                <li><a href="">Create a List</a></li>
                <li><a href="">Find a List or Registry</a></li>
                <li><a href="">AmazonSmile Charity Lists</a></li>
            </ul>
            <ul className="greet-list">
                <h1>Your Account</h1>
                <li><a href="">Account</a></li>
                <li><a href="">Orders</a></li>
                <li><a href="">Recommendations</a></li>
                <li><a href="">Browsing History</a></li>
                <li><a href="">Watchlist</a></li>
                <li><a href="">Video Purchases & Rentals</a></li>
                <li><a href="">Kindle Unlimited</a></li>
                <li><a href="">Content & Devices</a></li>
                <li><a href="">Subscribe & Saved Items</a></li>
                <li><a href="">Membership & Subscriptions</a></li>
                <li><a href="">Prime Membership</a></li>
                <li><a href="">Amazon Credit Cards</a></li>
                <li><a href="">Music Library</a></li>
                <li><a href="">Start a Selling Account</a></li>
                <li><a href="">Register for a Business Account</a></li>
            </ul>
        </ul>
    )
    const signin = () => (
        <nav className="outergreet">
            <button onClick={handleSign} id="topbutton"><div id='topgreet'>Hello, Sign in</div>
                <div id='bottomgreet'>
                    Account & Lists<img src={window.arrowURL}></img>
                </div>
            </button>
            <div className="greet">
                <ul className="outer-greet-links">
                    <li><Link to="/login" id="greet-signin"><button>Sign in</button></Link></li>
                    <li><p>New customer?<Link to="/signup" id="start-link">Start here.</Link></p></li>
                </ul>
                {accountRender()}
            </div>
        </nav>
    );
    const welcome = () => (
        <header className="nav-group">
            <button className="header-button">
                <h2 id="greeting">Hello, {props.currentUser.name}</h2>
                <div id='logingreet'>Account & Lists<img src={window.arrowURL}></img></div>
            </button>
            <div className="greet">
                <ul className="greet-links">
                    <ul className="greet-shopping-list">
                        <h1>Your Lists</h1>
                        <li id="shopping-list-border"><a href="" >Shopping List</a></li>
                        <li><a href="">Create a List</a></li>
                        <li><a href="">Find a List or Registry</a></li>
                        <li><a href="">AmazonSmile Charity Lists</a></li>
                    </ul>   
                    <ul className="greet-list">
                        <h1>Your Account</h1>
                        <li><a href="">Account</a></li>
                        <li><a href="">Orders</a></li>
                        <li><a href="">Recommendations</a></li>
                        <li><a href="">Browsing History</a></li>
                        <li><a href="">Watchlist</a></li>
                        <li><a href="">Video Purchases & Rentals</a></li>
                        <li><a href="">Kindle Unlimited</a></li>
                        <li><a href="">Content & Devices</a></li>
                        <li><a href="">Subscribe & Saved Items</a></li>
                        <li><a href="">Membership & Subscriptions</a></li>
                        <li><a href="">Prime Membership</a></li>
                        <li><a href="">Amazon Credit Cards</a></li>
                        <li><a href="">Music Library</a></li>
                        <li><a href="">Start a Selling Account</a></li>
                        <li><a href="">Register for a Business Account</a></li>
                        <li><a href="">Switch Accounts</a></li>
                        <li><a href="" onClick={(e) => handleClick(e)}>Sign Out</a></li>
                    </ul>
                </ul>
            </div>
        </header>
    )
    return props.currentUser ? welcome() : signin();
}



export default Greeting;