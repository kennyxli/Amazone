import React from 'react'
import { Link } from 'react-router-dom';

const Return = (props) =>{
    return (
        <div className='outerReturn'>
            <Link style={{textDecoration:"none"}} to="/cart" id="returnbutton">
                <div id='topreturn'>Returns</div>
                <div id='bottomreturn'>& Orders</div>
            </Link>
        </div>
    )
    
}

export default Return