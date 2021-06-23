import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap"
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Service = (props) => (
    <tr>
        <td>{props.service.SERVICE_NAME}</td>
        <td>{props.service.STATE}</td>
        <td><Button type="button" class="btn btn-success active">Start</Button></td>
        <td>
            <Button type="button" class="btn btn-danger active"> Stop</Button>
        </td>
    </tr>
);

export default class DBServiceList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
        super(props);
        this.state = { services: [] };
    }

    // This method will get the data from the database.
    componentDidMount() {
        axios
            .get("http://localhost:3000/dbservices/set1/")
            .then((response) => {
                console.log(response.data);
                this.setState({ services: response.data.Windows[0].DB });
            })
            .catch(function (error) {
                console.log(error);
            });
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




