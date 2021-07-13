import React from 'react';
import "./sidebar.css";

function Sidebar(){


    return(
        <>  
           <div className =  "sidebar" >
               <h3 className = "text-center text-white"> HTEC </h3>
                <hr className = "bg-white"/>
            <div className = "vertical-menu">
                  <a href = "#"> Dashboard </a> 
                  <a href = "#" > User Management </a> 
                  <a href = "#" > Data </a> 

            </div>


            </div>


        </>

    )
}

export default Sidebar;