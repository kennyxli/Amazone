import React from 'react'
import {Link} from 'react-router-dom'
import ProductIndex from '../product/product_index'


export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            input:'',
            previousInput:''
        }
        this.getInput = this.getInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componenetDidMount(){
        this.getInput()
    }
    getInput(e) {
        let search = e.currentTarget.value 
        this.setState(state=>({
            previousInput: state.input,
            input: search
        }))
    }

   handleSubmit(e){
       e.preventDefault()
        this.props.receiveSearch(this.state.input)
       this.props.history.push('/products')
   }

   handleRender(){
       if(this.props.match.url === "/products"){
           <ProductIndex input={this.state.input}/>
       }
   }
    render(){
        
        
        return(
           
                <form className='outerSearch'>
                <input id='search' 
                    type="text" 
                    onChange={this.getInput}
                />
                
                
                <button id='sbutton'
                    onClick={this.handleSubmit}>
                <img id='searchb' 
                    src={window.searchURL}>
                </img>
                </button>
               </form>
           
        )
    }
}