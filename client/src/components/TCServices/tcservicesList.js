import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap"
import { Button } from 'react-bootstrap';
import axios from 'axios';

var servicejson = require('../../services-list.json');

var displayNames = [];
for (var key in servicejson.windows.set1.tc) {
    if (servicejson.windows.set1.tc.hasOwnProperty(key) && key !== 'creds') {
        displayNames.push(key);
    }
}


const Service = (props) => (

    <tr>
        <td>{props.displayname}</td>
        <td>{props.service}</td>
        <td><Button type="button" onClick={() => { props.startService(props.displayname) }}>Start</Button></td>
        <td>
            <Button type="button" onClick={() => { props.stopService(props.displayname) }}>Stop</Button>
        </td>
    </tr>
);

export default class TCServiceList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
        super(props);
        this.startService = this.startService.bind(this);
        this.stopService = this.stopService.bind(this);
        this.state = { services: [] };
    }

    // updateData = async () => {
    //     const url = "http://localhost:3000/tcservices/set1/update";
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     this.setState({ services: data.Windows[0].TC });
    // }
    fetchData = async () => {
        axios
            .get("http://localhost:3000/tcservices/set1")
            .then((response) => {
                this.setState({ services: response.data.Windows[0].TC });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateData = async () => {
        axios
            .patch("http://localhost:3000/tcservices/set1/update");

    }


    startService(serviceName) {
        axios
            .patch("http://localhost:3000/tcservices/set1/start/" + serviceName)
            .then((response) => {
                console.log(response);
            });
    }

    stopService = async (serviceName) => {
        axios
            .patch("http://localhost:3000/tcservices/set1/stop/" + serviceName)
            .then((response) => {
                console.log(response);
            });
    }



    // This method will get the data from the database.
    async componentDidMount() {
        await this.updateData();

        // this.intervalId = setInterval(() => {
        //     this.fetchData();
        // }, 3000);

        await this.fetchData();

        this.intervalId = setInterval(() => {
            this.fetchData();
        }, 3000);

        this.updateData();

        // this.intervalId2 = setInterval(() => {
        //     this.updateData();
        // }, 3000);

        // await this.startService();
        // this.intervalId2 = setInterval(() => {
        //     this.updateData()
        // }, 3000);

    }

    // componentWillUnmount() {
    //     clearInterval(this.intervalId);
    //     //clearInterval(this.intervalId2);
    // }

    // componentDidUpdate(prevState, prevProps) {
    //     this.updateData();

    //     this.intervalId2 = setInterval(() => {
    //         this.updateData();
    //     }, 3000);

    //     this.service = `${this.state.service}`
    // }


    // This method will map out the services on the table
    serviceList() {
        var i = 0;
        var serviceStateArray = Object.entries(this.state.services);

        var serviceStateMap = new Map();

        for (var key = 0; key < serviceStateArray.length; key++) {
            serviceStateMap.set(serviceStateArray[key][1].SERVICE_NAME, []);
            serviceStateMap.get(serviceStateArray[key][1].SERVICE_NAME).push(serviceStateArray[key][1].STATE);
            serviceStateMap.get(serviceStateArray[key][1].SERVICE_NAME).push(serviceStateArray[key][1]._id);

        }
        //console.log(serviceStateMap);

        return this.state.services.map(() => {
            // console.log(servicejson.windows.set1.tc[displayNames[i]]);
            // console.log(serviceStateMap.get(servicejson.windows.set1.tc[displayNames[i]].replace(/['"]+/g, ''))[0]);
            // console.log(serviceStateMap.get(servicejson.windows.set1.tc[displayNames[i]].replace(/['"]+/g, ''))[1]);
            return (
                <Service
                    displayname={displayNames[i++]}
                    service={serviceStateMap.get(servicejson.windows.set1.tc[displayNames[i - 1]].replace(/['"]+/g, ''))[0]}
                    _id={serviceStateMap.get(servicejson.windows.set1.tc[displayNames[i - 1]].replace(/['"]+/g, ''))[1]}
                    startService={this.startService}
                    stopService={this.stopService}
                />
            );
        });
    }

    // This following section will display the table with the services.
    render() {
        return (
            <div>
                <h3>TC Service List</h3>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.serviceList()}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        );
    }
}




