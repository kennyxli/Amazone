import React from 'react'


export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='outerSearch'>
                <input id='search' type="text" /><button id='sbutton'><img id='searchb' src={window.searchURL}></img></button>
            </div>
        )
    }
}