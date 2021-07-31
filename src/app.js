import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from  "./components/auth/signup";
import Login from  "./components/auth/login";
import Logout from './components/auth/logout';
import Dashboard from './components/auth/dashboard';
import Users_management from './components/sidebar/menu_components/users_management';

import All_machine  from './components/body/all_machine';
import Machine_status from './components/body/machine_status';
import Machine_data from './components/body/machine_data';
import Analytics from './components/body/analytics';


import PrivateRoute from './private_route';

const App =()=> {

    

    return(

        <>
           <div  style = {{background : "#2980b9"}}>
            <BrowserRouter>
                <Route exact path= "/" component = {Login} />
                <Route  path = "/signup" component = {Signup} />
                <Route path = "/logout" component = {Logout} />
                <Route path = "/dashboard" component = {Dashboard} />
                 <Route path = "/machine-status" component = {Machine_status} />
                <Route path = "/machine-data" component = {Machine_data} />
                 <Route path = "/analytics" component = {Analytics} />
            </BrowserRouter>
          </div> 
        </>
    )
}

export default App;