import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting'
import SearchBar from './searchbar'
import Return from './return'
import CartIcon from './cart_icon'
import Location from './location'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return (
            <nav className="nav">
                <a href=""><img src={window.logoURL} id="navlogo"></img></a>
                <Location push={this.props.history.push} currentUser={this.props.currentUser}/>
                <SearchBar /><br/>
                <div id='flagarrow'><img src={window.flagURL} id="navflag"></img><img id="arrow" src={window.arrowURL}></img></div>
                <Greeting id='greet' currentUser={this.props.currentUser} logout={this.props.logout} push={this.props.history.push}/>
                <Return/>
                <CartIcon/>
            </nav>
        )
    }
}