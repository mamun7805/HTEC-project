import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
// load components
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';

import "./dashboard.css";


function Dashboard(){


    return(
        <>
           <div >
               <div className = "row">
                <div className = "col-md-2">
                    <div>
                    <Sidebar />
                    </div>
                </div>
                <div className = "col-md-10 right-side">
                    <div>
                        <Header />
                    </div>   
                    <div>
                        <Body />
                        
                    </div>
                    <div>    
                        <Footer/>
                    </div>      
                </div>
            </div>             
             
        </div>  



       
        </>

    )
}


export default Dashboard;