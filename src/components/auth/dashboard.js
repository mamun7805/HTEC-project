import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
// load components
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';



function Dashboard(){
    const [isLogin, setIsLogin] = useState(true);

    useEffect(()=> {
        const token = localStorage.getItem('token');
        if(token === null){
            setIsLogin(false)
        }

    })


    if(isLogin === false){
        return <Redirect to = "/" />
    }

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
                        <Header/>
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