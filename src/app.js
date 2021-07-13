import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Login from  "./components/auth/login";
import Signup from  "./components/auth/signup";
import Dashboard from './components/auth/admin';


// load css
import './app.css';



const App =()=> {

    

    return(

        <>
            <BrowserRouter>
                <Route exact path= "/" component = {Login} />
                <Route  path = "/register" component = {Signup} />
                <Route path = "/dashboard" component = {Dashboard} />
            </BrowserRouter>

            
        </>
    )
}

export default App;