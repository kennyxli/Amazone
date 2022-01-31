import React from 'react';
import { Link } from 'react-router-dom';

function Location(props) {
    const handleClick = () => {
        props.push('/login')
    }
    const signin = () => (
        <nav className="outer-location">
            <button onClick={handleClick} className="loc-button">
                <div className='top-address'>Hello</div>
                <div className='address'><img className='loc' src={window.locURL}></img>Select your address</div>
            </button>
        </nav>
    );
    const welcome = () => (
        <header className="outer-location">
            <button className="loc-button">
                <h2 className="top-address">Deliver to {props.currentUser.name}</h2>
                <div className='address'><img className='loc'src={window.locURL}></img>New York, NY</div>
            </button>
        </header>
    )
    return props.currentUser ? welcome() : signin();
}


export default Location;