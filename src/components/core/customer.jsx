import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BG3 from '../image/BG3.jpg'

class Customer extends React.Component {

    viewCustomer = () => {
        this.props.history.push("/viewcustomer")
    }
    createCustomer = () => {
        this.props.history.push("/createcustomer")
    }
    newAccount = () => {
        this.props.history.push("/createstatement")
    }
    customerById = () => {
        this.props.history.push("/viewcustomerbyid")
    }

    render() {
        return (
            <>

                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}>
                    <br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '700px', height: '75px', marginLeft: '25%' }} onClick={this.viewCustomer}><h3>All Customer Details</h3></Button>{' '}<br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '700px', height: '75px', marginLeft: '25%' }} onClick={this.createCustomer}><h3>Create Account</h3></Button>{' '}<br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '700px', height: '75px', marginLeft: '25%' }} onClick={this.newAccount}><h3>New Account For Old Customer</h3></Button>{' '}<br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '700px', height: '75px', marginLeft: '25%' }} onClick={this.customerById}><h3>Get Your Details</h3></Button>{' '}<br /><br />

                </div>
            </>
        )
    }
}

export default Customer