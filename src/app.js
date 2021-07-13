import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from  "./components/auth/signup";
import Login from  "./components/auth/login";
import Logout from './components/auth/logout';
import Dashboard from './components/auth/dashboard';


// load css
import './app.css';



const App =()=> {

    

    return(

        <>
            <BrowserRouter>
                <Route exact path= "/" component = {Login} />
                <Route  path = "/register" component = {Signup} />
                <Route path = "/dashboard" component = {Dashboard} />
                <Route path = "/logout" component = {Logout} />
                
            </BrowserRouter>

            
        </>
    )
}

export default App;