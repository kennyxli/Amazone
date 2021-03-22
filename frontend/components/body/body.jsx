import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './product_list'


export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="body">
                <img id='background' src={window.backgroundURL} ></img>
                <ProductList receiveSearch={this.props.receiveSearch} history={this.props.history}/>
            </div>
        )
    }
}