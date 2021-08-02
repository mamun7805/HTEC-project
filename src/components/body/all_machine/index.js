import React, { Component } from 'react';
import mqtt from 'mqtt'
import axios from 'axios';
import "./index.css";
 
class All_machine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      machines : []
    }
  }
 
  componentDidMount() {

  	const config = {
  		headers : {
  			Authorization : 'jwt '+ localStorage.getItem('token')
  		}
  	}
  	axios.get("http://172.104.163.254:8000/api/v1/machines", config)
  		.then(res =>{

  			this.setState({
  				machines : res.data.data
  			})
  		})

  	 // establish mqqt connection
    this.client = mqtt.connect('mqtt://127.0.0.1:8083');
    this.client.options.username = "shafik"
    this.client.options.password = "shafik";
    this.client.on("connect", () => {
      console.log("connected");
      this.client.subscribe("machine/+");
    });
    this.client.on('message', (topic, message) => {
      this.handleJsonMessage(topic, message.toString());
    })
  }
 
  handleJsonMessage = (topic, message) => {
    const machine_no = topic.split("/")[1];
    let new_data =this.state.data;
    new_data[machine_no] = message;
    this.setState({data: new_data});
  }
 
  componentWillUnmount() {
    if (this.client) {
      this.client.end()
    }
  }
 
  render() {
    console.log("state data: ", this.state.data);
    console.log("all machine : ", this.state.machines)


    return (
  

        <div className = "machine-container">
        	   	
        	   	{
        	   		this.state.machines.map(d => 
        	   			<div className = "all-machine"> {d.name} </div>

        	   		)
        	   	}
        	
        </div>
    );
  }
}
 
export default All_machine;