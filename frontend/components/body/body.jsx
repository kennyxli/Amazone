import React from 'react';
import { Link } from 'react-router-dom';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="body">
                <img id='background' src={window.backgroundURL} ></img>
                
            </div>
        )
    }
}