import React from 'react';
import { Link, redirect } from 'react-router-dom';



function Header(){

 

    return <div>    
        <Link style={{textDecoration: 'none'}} to={"/"}><header> <h1>E&L Shopping</h1></header></Link>
        <Link style={{textDecoration: 'none'}} to={"/cart"}>
            <h1>cart</h1>
        </Link>
    </div>
    

}

export default Header