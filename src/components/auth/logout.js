import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Logout(){

    useEffect(()=> {
        localStorage.removeItem('token');
    })

    return(
        <>
          <div className = "p-5 text-center">
           <h4 className = "text-white"> You have succefully logout </h4>
           <Link to = "/"  className = "text-white" > Login again... </Link>
         </div>
        </>

    )
}


export default Logout;