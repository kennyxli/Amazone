import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';

export default class LowerNavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        if (this.props.currentUser.currentUser ){
            this.props.getCartItems()
        }
        if (this.props.products.length < 1){
            this.props.getProducts()
        }
    }

    handleClick(e, title){
        e.preventDefault()
        this.props.receiveSearch(title)
        this.props.history.push("/products")
    }
    render() {
        return (
            <nav className="lowernavbar">
                <a href="https://github.com/kennyxli" target="_blank" className="lowerlist"><img id="nav-github" src={window.githubURL} ></img></a>
                <a href="https://www.linkedin.com/in/kenny-li-793b6b15b/" target="_blank" className="lowerlist"><img id="nav-github" src={window.linkedinURL} ></img></a>
                <a href="https://angel.co/u/kenny-li-9" target="_blank" className="lowerlist"><FaAngellist style={{fontSize: "18px"}}/></a>
                <a href="https://kennyxli.github.io/KennyLi/" target="_blank" className="lowerlist">Portfolio</a>
                <a onClick={(e)=>this.handleClick(e,"")} href="" className="lowerlist">All</a>
                <a onClick={(e) => this.handleClick(e, "Theragun")} href="" className="lowerlist">Theragun</a>
                <a onClick={(e) => this.handleClick(e, "Yoga")} href="" className="lowerlist">Yoga</a>
                <a onClick={(e) => this.handleClick(e, "Resistance Bands")} href="" className="lowerlist">Resistance Bands</a>
                <a onClick={(e) => this.handleClick(e, "Blender")} href="" className="lowerlist">Blender</a>
                <Link to="/product/14" className="lowerlist">Best Seller</Link>
                <Link to="/product/11" className="lowerlist">New Release</Link>
                <Link to="/product/5" className="lowerlist">Today's Choice</Link>
                <Link to="/product/10" className="lowerlist">Our Favorite</Link>
                <Link to="/product/2" className="lowerlist">Highest Rated</Link>
                <Link to="/product/15" className="lowerlist">A Classic</Link>
                <Link to="/product/9" className="lowerlist">The Perfect Gift</Link>
            </nav>
        )
    }
}