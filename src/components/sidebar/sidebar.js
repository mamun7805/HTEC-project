import React from 'react';
import {Jumbotron, ListGroup} from 'react-bootstrap'
import "./sidebar.css";

function Sidebar(){


    return(
        <>  
           <Jumbotron>
            <ul className = "sidebar-list">

                <li>  <a href = "#"> Dashboard </a> </li>
                <li>  <a href = "#" > Dashboard </a> </li>

            </ul>

            </Jumbotron>


        </>

    )
}

export default Sidebar;