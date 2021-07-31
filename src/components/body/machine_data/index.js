import React from  'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Sidebar from '../../sidebar/sidebar';
import Table_data from  "./data_table/table.js";

function Machine_data(){

	return(
		<>
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
                         
                        <Table_data />
                        
                    </div>
                    <div>    
                        <Footer/>
                    </div>      
                </div>
            </div>             
		</>
		)
}
export default Machine_data;