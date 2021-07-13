import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header(){

    return(
        <>

            <div className = "header">
                <ul className = "top-bar">
                    <li> <Link to ="/logout"> Logout  </Link>  </li>
                    <li> Username  </li>
                </ul>
            </div>
        </>

    )
}

export default Header;