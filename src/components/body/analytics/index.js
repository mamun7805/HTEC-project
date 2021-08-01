import React from  'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Sidebar from '../../sidebar/sidebar';

import Analytics_table from './analytics_table/table.js'

function Analytics(){

	return(
		<>

		 <div >
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
                    <div className ="jumbotron m-0">
                         
                                <Analytics_table/>
                        
                    </div>
                    <div>    
                        <Footer/>
                    </div>      
                </div>
            </div>             
        </div>  
		</>
		)
}
export default Analytics;