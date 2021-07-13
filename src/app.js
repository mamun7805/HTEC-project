import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from  "./components/auth/signup";
import Login from  "./components/auth/login";
import Logout from './components/auth/logout';
import Dashboard from './components/auth/dashboard';



const App =()=> {

    

    return(

        <>
           <div  style = {{background : "#2980b9"}}>
            <BrowserRouter>
                <Route exact path= "/" component = {Login} />
                <Route  path = "/signup" component = {Signup} />
                <Route path = "/dashboard" component = {Dashboard} />
                <Route path = "/logout" component = {Logout} />
            </BrowserRouter>
          </div>
            
        </>
    )
}

export default App;