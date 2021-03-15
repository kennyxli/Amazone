import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav>
                <Greeting currentUser={this.props.currentUser} logout={this.props.logout}/>
            </nav>
        )
    }
}