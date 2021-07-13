import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


function Login(){
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState(""); 
    const [islogin, setIslogin] = useState(false);
    
    

    const loginSubmit = (e)=> {
        e.preventDefault();
        if(email === "test@gmail.com" && password === "123456"){
            setIslogin(true)
            const token = localStorage.setItem('token', "dldfldfldfdfdfdfdfdf");
            if(token === null){
            setIslogin(false);
            }
        }
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
                    <div className = "bg-info p-5" >
                       <h4 className = "text-center text-white"> Dash Board Login </h4> 
                    </div>
                        <div className = "container bg-white p-5 shadow-sm">
                            <form onSubmit = {loginSubmit}>
                                <label> Email </label>
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    name = "email"
                                    onChange = {(e)=> setEmail(e.target.value)}
                                />
                                <label> password </label>
                                <input 
                                    type = "password"
                                    className = "form-control"
                                    name = "password"
                                    onChange = {(e)=> setPassword(e.target.value)}
                                />
                                <hr/>
                                <button className = "btn btn-info"> Login </button>
                                <div className = "text-right">
                                    <a href = "/# "  > Sign Up </a>

                                </div>
                                <a href = "#"> Forget Password ?</a>
                            </form>
                        </div>
                    </div>
                <div className = "col-md-4"></div>
                </div>
        </div>

        <div className = "bg-info p-5" >
        </div>
        

        </>

    )
}


export default Login;