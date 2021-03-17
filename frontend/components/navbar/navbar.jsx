import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return (
            <nav className="nav">
                <a href=""><img src={window.logoURL} id="navlogo"></img></a>
                <Greeting id='greet' currentUser={this.props.currentUser} logout={this.props.logout}/>
            </nav>
        )
    }
}