import React from 'react';


function Login(){


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
                            <form>
                                <label> Email </label>
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    name = "email"
                                />
                                <label> password </label>
                                <input 
                                    type = "password"
                                    className = "form-control"
                                    name = "password"
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