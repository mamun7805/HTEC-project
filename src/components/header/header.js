import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header(){

    return(
        <>

            <div className = "header-bar">
                     <h5 className = "text-left" > <span style = {{fontSize : "30px"}} ><i class="fas fa-user"></i></span>  Mr. Ahad Hassan</h5>
                     <Link className = "text-white btn logout-btn " to ="/logout"> Logout  </Link>
            </div>
            
        </>

    )
}

export default Header;