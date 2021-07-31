import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar(){


    return(
        <>  
           <div className =  "sidebar" >
               <h3 className = "text-center text-white"> Dashboard </h3>
                <hr className = "bg-white"/>
            <div className = "vertical-menu">
                 <Link to ="/dashboard" > All Machines </Link> 
                 <Link to = "/machine-status" >Machiene Status  </Link>
                 <Link to = "/machine-data"> Machine Data </Link>  
                 <Link to = "/analytics" > Analytics  </Link> 

            </div>


            </div>


        </>

    )
}

export default Sidebar;