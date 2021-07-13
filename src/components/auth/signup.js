import React from 'react';


function Signup(){


    return(
        <>
        <div className = "jumbotron m-0">
                <div className = "row">
                    <div className = "col-md-4"></div>
                    <div className = "col-md-4">
                    <div className = " p-5" style = {{background : "#2980b9"}} >
                       <h4 className = "text-center text-white"> Create An Account </h4> 
                    </div>
                        <div className = "container bg-white p-5 shadow-sm">
                            <form>
                                <label>Full Name</label>
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    name = "fullname"
                                />
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
                                <label> Confirm password </label>
                                <input 
                                    type = "password"
                                    className = "form-control"
                                    name = "password"
                                />


                                <hr/>
                                <button className = "btn text-white " style = {{background : "#2980b9"}}> Register </button>
                            </form>
                        </div>
                    </div>
                <div className = "col-md-4"></div>
                </div>
        </div>

        <div className = " p-5" style = {{background : "#2980b9"}} >
        </div>
        

        </>

    )
}


export default Signup;