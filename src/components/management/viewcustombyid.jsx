import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getCustomerById } from "../../redux/action/bank.action";
import Table from 'react-bootstrap/Table';
import BG3 from '../image/BG3.jpg';
import Button from 'react-bootstrap/Button';


class ViewCustomerById extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customer_id: ""
        }
    }
    getData = () => {
        this.props.getCustomerById(this.state.customer_id)
    }

    render() {
        let { customerCollection } = this.props
        return (
            <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <br />
                    <b style={{ color: "white" }}>Customer ID</b>  <input type="text" onChange={(event) => this.setState({ customer_id: event.target.value })} />
                    <br />
                    <Button variant="dark" onClick={this.getData}>Get Customer Details</Button>
                </div>
                <br />
                <Table striped bordered hover variant="primary" align="center" style={{ width: "70%" }}>
                    <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Mail id</th>
                            <th>Phone Number</th>
                            <th>Account Number</th>
                            <th>Bank id</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerCollection.map(res => (
                                <tr>
                                    <td>{res.customer_id}</td>
                                    <td>{res.customer_name}</td>
                                    <td>{res.address}</td>
                                    <td>{res.mailid}</td>
                                    <td>{res.phone_no}</td>
                                    <td>{res.account_no}</td>
                                    <td>{res.bank_id}</td>
                                    <td>{res.balance}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customerCollection: state.customer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getCustomerById: bindActionCreators(getCustomerById, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewCustomerById)