import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <nav className="lowernavbar">
                <a href="https://github.com/kennyxli" className="lowerlist">GitHub</a>
                <a href="https://www.linkedin.com/in/kenny-li-793b6b15b/" className="lowerlist">LinkedIn</a>
                <a href="" className="lowerlist">Best Seller</a>
                <a href="" className="lowerlist">New Release</a>
                <a href="" className="lowerlist">Today's Choice</a>
                <a href="" className="lowerlist">Our Favorite</a>
                <a href="" className="lowerlist">Workout</a>
                <a href="" className="lowerlist">Higest Rated</a>
            </nav>
        )
    }
}