import React from 'react';
import "./sidebar.css";

function Sidebar(){


    return(
        <>  
           <div className =  "sidebar" >
               <h3 className = "text-center text-white"> HTEC </h3>
                <hr className = "bg-white"/>
            <ul className = "sidebar-list">
                <li>  <a href = "#"> Dashboard </a> </li>
                <li>  <a href = "#" > User Management </a> </li>
                <li>  <a href = "#" > Data </a> </li>

            </ul>

            </div>


        </>

    )
}

export default Sidebar;