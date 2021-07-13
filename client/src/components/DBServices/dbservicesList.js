import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap"
import { Button } from 'react-bootstrap';
import axios from 'axios';
var servicejson = require('../../services-list.json');

var displayNames = [];
for (var key in servicejson.windows.set1.db) {
    if (servicejson.windows.set1.db.hasOwnProperty(key) && key !== 'creds') {
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

export default class DBServiceList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
        super(props);
        this.startService = this.startService.bind(this);
        this.stopService = this.stopService.bind(this);
        this.state = { services: [] };
    }

    fetchData = async () => {
        axios
            .get("http://localhost:3000/dbservices/get/set/1")
            .then((response) => {
                this.setState({ services: response.data[0].Windows[0].DB });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateData = async () => {
        for (var i = 0; i < displayNames.length; i++) {
            axios
                .patch("http://localhost:3000/dbservices/update/set/1/" + displayNames[i]);
        }

    }

    startService = async (serviceName) => {
        axios
            .patch("http://localhost:3000/dbservices/start/set/1/" + serviceName);
    }

    stopService = async (serviceName) => {
        axios
            .patch("http://localhost:3000/dbservices/stop/set/1/" + serviceName);
    }

    // This method will get the data from the database.
    async componentDidMount() {

        await this.fetchData();

        this.intervalId = setInterval(() => {
            this.fetchData();
        }, 3000);

        await this.updateData();

        this.intervalId2 = setInterval(() => {
            this.updateData();
        }, 3000);

    }

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
            // console.log(servicejson.windows.set1.db[displayNames[i]]);
            // console.log(serviceStateMap.get(servicejson.windows.set1.db[displayNames[i]].replace(/['"]+/g, ''))[0]);
            // console.log(serviceStateMap.get(servicejson.windows.set1.db[displayNames[i]].replace(/['"]+/g, ''))[1]);
            return (
                <Service
                    displayname={displayNames[i++]}
                    service={serviceStateMap.get(servicejson.windows.set1.db[displayNames[i - 1]].replace(/['"]+/g, ''))[0]}
                    _id={serviceStateMap.get(servicejson.windows.set1.db[displayNames[i - 1]].replace(/['"]+/g, ''))[1]}
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
                <h3>DB Service List</h3>
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




