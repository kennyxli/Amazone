import React from 'react';
import { Link } from 'react-router-dom';

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
                    <p id="myself-footer"> Kenny Li | 
                        <a className="footer-link" href="https://github.com/kennyxli"><img id="footer-github" src={window.githubURL} ></img></a> | 
                        <a className="footer-link" href="https://www.linkedin.com/in/kenny-li-793b6b15b/"><img id="footer-github" src={window.linkedinURL} ></img></a>
                    </p>
                    
                </div>
                <div id='bottom-footer'>
                    <Link to="/" onClick={this.handleScroll}><img id="footer-logo" src={window.afooterURL} ></img></Link>
                </div>
            </div>
        )
    }
}