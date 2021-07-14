import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar(){


    return(
        <>  
           <div className =  "sidebar" >
               <h3 className = "text-center text-white"> HTEC </h3>
                <hr className = "bg-white"/>
            <div className = "vertical-menu">
                 <Link to ="/dashboard" > Dashboard </Link> 
                 <Link to = "/user-management"> Users </Link>  
                  <a href = "#" > Data </a> 

            </div>


            </div>


        </>

    )
}

export default Sidebar;