import React from 'react'
import {Link} from 'react-router-dom'
import ProductIndex from '../product/product_index'


export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            input:''
        }
        this.getInput = this.getInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    getInput(e) {
        let search = e.currentTarget.value 
        this.props.receiveSearch(search)
        this.setState({input: search})
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.props.receiveSearch(this.state.input)
        this.setState({ input: ''})
        this.props.history.push('/products')
    }
    
    componenetDidMount(){
        this.getProducts()
        this.getInput()
    }

   dropdownSubmit(e, input){
       this.props.history.push('/products')
       this.setState({ input: ''})
       this.props.receiveSearch(input)
    
   }

   dropdownItem(e, idx){
       this.setState({ input: '' })
       this.props.history.push(`/product/${idx}`)
   }

    render(){
        let productHolder=''
        if (this.props.products && this.props.search && this.state.input) {

          productHolder =  this.props.products.filter((option) => {
              
              if (option.title.toLowerCase().includes(this.state.input.toLowerCase())){
                  return option
              }
          })
          .map((product,idx) => (
                <button key={product.id} onClick={e => this.dropdownItem(e, product.id)}>{product.title}</button>
            ))
        }    
        
        let categoryHolder = ''
        if (this.props.products && this.props.search && this.state.input) {

            categoryHolder = this.props.products.filter((option,idx) => {
                
                if (option.category.toLowerCase().includes(this.state.input.toLowerCase()) && (idx === 0 || idx % 4 === 0)) {
                    return option
                }
            })
                .map((product, idx) => (
                    <button key={idx} onClick={(e)=>this.dropdownSubmit(e,product.category)}>{product.category}</button>
                ))
        }    

        return(
               
                <form className='outerSearch'>
                <input id='search' 
                    type="text" 
                    value={this.state.input}
                    onChange={this.getInput}/>
                
                <button id='sbutton'
                    onClick={this.handleSubmit}>
                <img id='searchb' 
                    src={window.searchURL}>
                </img>
                </button>
                <div className='search-dropdown'>
                    {categoryHolder}
                    {/* {productHolder} */}
                </div>
               </form>
                
        )
    }
}