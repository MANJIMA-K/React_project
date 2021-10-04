import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getTransactionDetails } from "../../redux/action/bank.action";
import Table from 'react-bootstrap/Table';
import BG3 from '../image/BG3.jpg';
import Button from 'react-bootstrap/Button';


class ViewTransactionDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            account_no: "",
            from: "",
            to: ""
        }
    }
    getData = () => {
        this.props.getTransactionData(this.state.account_no, this.state.from, this.state.to)
    }

    render() {
        let { statementCollection } = this.props
        return (
            <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <br />
                    <b style={{ color: "white" }}>Account number</b>  <input type="text" onChange={(event) => this.setState({ account_no: event.target.value })} />{this.state.account_no}
                    <b style={{ color: "white" }}>From Date </b> <input type="date" onChange={(event) => this.setState({ from: event.target.value })} />{this.state.from}
                    <b style={{ color: "white" }}>To Date </b> <input type="date" onChange={(event) => this.setState({ to: event.target.value })} />{this.state.to}
                    <br />
                    <Button variant="dark" onClick={this.getData}>Get Statement</Button>{' '}
                </div>
                <br />
                <Table striped bordered hover variant="primary" align="center" style={{ width: "90%" }}>
                    <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Bank Id</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Mail id</th>
                            <th>Phone Number</th>
                            <th>Transaction Type</th>
                            <th>Account Number</th>
                            <th>Amount</th>
                            <th>Recepient</th>
                            <th>Transaction Date</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            statementCollection.map(res => (
                                <tr>
                                    <td>{res.customer_id}</td>
                                    <td>{res.bank_id}</td>
                                    <td>{res.customer_name}</td>
                                    <td>{res.address}</td>
                                    <td>{res.mailid}</td>
                                    <td>{res.phone_no}</td>
                                    <td>{res.transaction_type}</td>
                                    <td>{res.account_no}</td>
                                    <td>{res.amount}</td>
                                    <td>{res.recepient}</td>
                                    <td>{res.transaction_date}</td>
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
        statementCollection: state.statement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getTransactionData: bindActionCreators(getTransactionDetails, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTransactionDetails)