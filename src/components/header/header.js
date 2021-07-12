import React from 'react';
import "./header.css";

function Header(){

    return(
        <>

            <div className = "header">
                <ul className = "top-bar">
                    <li> <a href = "#"> Logout  </a>  </li>
                    <li> <a href = "#"> Username  </a> </li>
                </ul>
            
            </div>
       

        </>

    )
}

export default Header;