import React from 'react';
import { Link } from 'react-router-dom';

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {

        this.props.push('/login')
    }


    render() {
        const signin = () => (
            <nav className="outer-location">
                {/* <img src={window.arrowURL}></img> */}
                <button onClick={this.handleClick} className="loc-button">
                    
                    <div className='top-address'>Hello</div>
                    <div className='address'><img className='loc' src={window.locURL}></img>Select your address</div>
                </button>
            </nav>
        );
        const welcome = () => (

            <header className="outer-location">
                <button className="loc-button">
                    <h2 className="top-address">Deliver to {this.props.currentUser.name}</h2>
                    <div className='address'><img className='loc'src={window.locURL}></img>New York 10002</div>
                </button>
            </header>

        )

        return this.props.currentUser ? welcome() : signin();
    }
};


export default Location;