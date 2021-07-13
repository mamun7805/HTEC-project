import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';


// load components
// load components
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';



function Dashboard(){


    return(
        <>
            <div className = "jumbotron-fluid">
               <div className = "row">
                <div className = "col-md-2">
                    <div className = "jumbotron-fluid">
                    <Sidebar />
                    </div>
                </div>
                <div className = "col-md-10 m-0">
                    <div className = "header">
                        <Header />
                    </div>   
                    <div className = "body-content">
                        <Body />
                        
                    </div>
                    <div className = "footer">    
                        <Footer/>
                    </div>      
                </div>
            </div>             
             
        </div>
        </>

    )
}


export default Dashboard;