import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from  "./components/auth/signup";
import Login from  "./components/auth/login";
import Logout from './components/auth/logout';
import Dashboard from './components/auth/dashboard';
import Users_management from './components/sidebar/menu_components/users_management';



const App =()=> {

    

    return(

        <>
           <div  style = {{background : "#2980b9"}}>
            <BrowserRouter>
                <Route exact path= "/" component = {Login} />
                <Route  path = "/signup" component = {Signup} />
                <Route path = "/dashboard" component = {Dashboard} />
                <Route path = "/logout" component = {Logout} />
                <Route path = "/user-management" component = {Users_management} />
            </BrowserRouter>
          </div> 
        </>
    )
}

export default App;