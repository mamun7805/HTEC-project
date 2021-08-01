import React, { Component } from 'react';
import mqtt from 'mqtt'
import "./status.css";
 
class Status extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
 
  componentDidMount() {
    this.client = mqtt.connect('mqtt://127.0.0.1:8083');
    this.client.options.username = 'shafik';
    this.client.options.password = 'shafik';
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
    return (
        <div>
          <div className ="machine-container">
          {Object.keys(this.state.data).map((key, index) => (
            <div className = {(this.state.data[key] === 'on')?`machine-on`: `machine-off`} key={index}>Machine {key} is {this.state.data[key]}</div>
          ))}
        </div>
        </div>
    );
  }
}
 
export default Status;