import React from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';


// load components
import Sidebar from './components/sidebar/sidebar';


// load css
import './app.css';



const App =()=> {

    return(

        <>
            <Jumbotron>
                <Row>
                    <Col md = {2}  className = "sidebar" >

                        <Sidebar/>
                    </Col>
                    <col md = {10} >

                        {/* header */}
                        {/* body */}
                        {/* Footer */}

                       
                    </col>

                </Row>

            </Jumbotron>

                
          
             

        </>

    )
}

export default App;