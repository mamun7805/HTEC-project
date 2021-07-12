import React from 'react';

// load components
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
// load css
import './app.css';



const App =()=> {

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

export default App;