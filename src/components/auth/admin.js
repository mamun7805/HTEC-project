import React from 'react';


// load components
// load components
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';



function Admin(){


    return(
        <>

               <div className = "row">
                <div className = "col-md-2">
                    <Sidebar />
                </div>
                <div className = "col-md-10">
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
             

        </>

    )
}


export default Admin;