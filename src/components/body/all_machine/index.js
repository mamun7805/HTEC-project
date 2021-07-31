import React, {useState, useEffect} from  'react';
import axios from 'axios';
import "./index.css";



const  Data = [
    {
      "name": "Cleaning Machine",
      "machine_no": 1
    },
    {
      "name": "Blending Machine",
      "machine_no": 2
    },
    {
      "name": "Lap Former",
      "machine_no": 3
    },
    {
      "name": "Carding",
      "machine_no": 4
    },
    {
      "name": "Drawing Machin",
      "machine_no": 5
    },
    {
      "name": "Simplex Machine",
      "machine_no": 6
    },
    {
      "name": "Ring Frame",
      "machine_no": 7
    }
  ]



function All_machines(){

	const [machineData , setMachineData] = useState([]);
       
   

	useEffect(()=> {

    const config = {
     	headers: {
     		authorization : localStorage.getItem('token')
     	}
     } 
		axios.get("http://172.104.163.254:8000/api/v1/machines",config)
			.then(res=> {
				 console.log(res.data)
			})
	})

	return(
		<>
			<div  className ="machine-container">
		     {
		     	Data.map(d=> 
		     		<div className = "all-machine"> {d.name} </div>
		      )
		     }

             </div>
                 

		</>
		)
}


export default All_machines;