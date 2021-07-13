import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Logout(){

    useEffect(()=> {
        localStorage.removeItem('token');
    })

    return(
        <>
           <h4> You have succefully logout </h4>
           <Link to = "/" > Login again... </Link>
        </>

    )
}


export default Logout;