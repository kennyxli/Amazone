import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    
    handleScroll(){
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div id="outer-footer">
                <button id='scroll-button' onClick={this.handleScroll}>Back to top</button>
                <div id="middle-footer">
                    <p>Meet the Creator!</p>
                    <p id="myself-footer"><a href="https://kennyxli.github.io/KennyLi/" target="_blank" style={{color:"white", textDecoration:"none"}}>Kenny Li</a> | 
                        <a className="footer-link" href="https://github.com/kennyxli" target="_blank"><img id="footer-github" src={window.githubURL} ></img></a> | 
                        <a className="footer-link" href="https://www.linkedin.com/in/kenny-li-793b6b15b/" target="_blank"><img id="footer-github" src={window.linkedinURL} ></img></a> |
                        <a href="https://angel.co/u/kenny-li-9" className="footer-link" target="_blank"><FaAngellist style={{fontSize: "23px", position:"relative", top:"3px", left:"4px"}}/></a>
                    </p>
                </div>
                <div id='bottom-footer'>
                    <Link to="/" onClick={this.handleScroll}><img id="footer-logo" src={window.afooterURL} ></img></Link>
                </div>
            </div>
        )
    }
}