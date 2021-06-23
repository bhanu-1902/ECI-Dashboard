import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap"
import { Button } from 'react-bootstrap';
import axios from 'axios';
var servicelist = require('../../../../services-list.json');


const Service = (props) => (
    <tr>
        <td>{servicelist.windows.set1.tc[props.service.SERVICE_NAME]}</td>
        <td>{props.service.STATE}</td>
        <td><Button type="button" class="btn btn-success active">Start</Button></td>
        <td>
            <Button type="button" class="btn btn-danger active"> Stop</Button>
        </td>
    </tr>
);

export default class TCServiceList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
        super(props);
        this.state = { services: [] };
    }

    updateData = async () => {
        const url = "http://localhost:3000/tcservices/set1/update/";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ services: data.Windows[0].TC });
    }


    fetchData = async () => {
        const url = "http://localhost:3000/tcservices/set1/";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ services: data.Windows[0].TC });
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

        // axios
        //     .get("http://localhost:3000/tcservices/set1/")
        //     .then((response) => {
        //         this.setState({ services: response.data.Windows[0].TC });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    // This method will map out the services on the table
    serviceList() {
        return this.state.services.map((currentservice) => {
            return (

                <Service
                    service={currentservice}
                    key={currentservice._id}
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




