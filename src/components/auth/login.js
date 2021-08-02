import React, { useState, createContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


import Header from '../header/header.js';





function Login(){
    const [username, setUsername] =  useState("");
    const [password, setPassword] = useState(""); 
    const [islogin, setIslogin] = useState(false);
    
    


    const loginSubmit = (e)=> {

        e.preventDefault();

        const User = {
            username : username,
            password : password
         }

        // call api
        axios.post('http://172.104.163.254:8000/api/v1/users/token/',User)
        .then(res => {
            localStorage.setItem('token',res.data.data.token)
            if(localStorage.getItem('token'))
                setIslogin(true)
        })

        localStorage.setItem('username', username)

    }
    if(islogin === true){
        return <Redirect to = "/dashboard" />
    }

    return(
        <>
        <div className = "jumbotron m-0">
                <div className = "row">
                    <div className = "col-md-4"></div>
                    <div className = "col-md-4">
                    <div className = "p-5" style = {{background : "#2980b9"}} >
                       <h4 className = "text-center text-white"> HTEC Login </h4> 
                    </div>
                        <div className = "container bg-white p-5 shadow-sm">
                            <form onSubmit = {loginSubmit}>
                                <label> Username </label>
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    name = "username"
                                    onChange = {(e)=> setUsername(e.target.value)}
                                />
                                <label> password </label>
                                <input 
                                    type = "password"
                                    className = "form-control"
                                    name = "password"
                                    onChange = {(e)=> setPassword(e.target.value)}
                                />
                                <hr/>
                                <button className = "btn text-white" style = {{background : "#2980b9"}} > Login </button>
                                <br/>
                               
                            </form>
                        </div>
                    </div>
                <div className = "col-md-4"></div>
                </div>
        </div>  
         <div className = "p-5 m-0"  style = {{background : "#2980b9"}} >
            <div className = "p-5"></div>
         </div>
      
        </>

    )
}


export default Login;