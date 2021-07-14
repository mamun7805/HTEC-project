import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
// load components
import Sidebar from '../sidebar';
import Header from '../../header/header';
import UserTable from '../menu_components/table/table';
import Footer from '../../footer/footer';


function Users_management(){
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
                        <Header />
                    </div>   
                    <div className = "jumbotron m-0">
                         <UserTable/>
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


export default Users_management;