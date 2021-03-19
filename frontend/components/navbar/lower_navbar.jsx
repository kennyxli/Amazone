import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <nav className="lowernavbar">
                <a href="https://github.com/kennyxli" className="lowerlist"><img id="nav-github" src={window.githubURL} ></img></a>
                <a href="https://www.linkedin.com/in/kenny-li-793b6b15b/" className="lowerlist"><img id="nav-github" src={window.linkedinURL} ></img></a>
                <a href="" className="lowerlist">Best Seller</a>
                <a href="" className="lowerlist">New Release</a>
                <a href="" className="lowerlist">Today's Choice</a>
                <a href="" className="lowerlist">Our Favorite</a>
                <a href="" className="lowerlist">Workout</a>
                <a href="" className="lowerlist">Highest Rated</a>
                <a href="" className="lowerlist">A Classic</a>
                <a href="" className="lowerlist">Customer Loved</a>
                <a href="" className="lowerlist">The Perfect Gift</a>
            </nav>
        )
    }
}