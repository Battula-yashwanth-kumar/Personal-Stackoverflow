import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div>
            <div>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Add'>Add Error</NavLink>
                    <NavLink to='/'>Search Error</NavLink>
                </div>
            </div>

        </div>
    )
}
export default Navbar;