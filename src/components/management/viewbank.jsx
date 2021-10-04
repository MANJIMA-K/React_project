import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBank, updateCustomer } from "../../redux/action/bank.action";
import { deleteCustomer } from "../../redux/action/bank.action";
import Table from 'react-bootstrap/Table';
import BG3 from '../image/BG3.jpg';


class ViewBank extends React.Component {
    constructor(props) {
        super(props)
        this.props.getBankData()
    }

    editData = (id) => {
        this.data = this.props.bankCollection[id]
        this.props.updateCustomer(this.data)
        this.props.history.push('/createcustomer')
    }

    deleteData = (id) => {
        this.props.deletecustomer(id);
        setTimeout(() => {
            this.props.getBankData()
        }, 200)
    }
    render() {
        let { bankCollection } = this.props;

        return (
            <>
                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}>
                    <br />
                    <Table striped bordered hover variant="primary" align="center" style={{ width: "80%" }}>
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
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bankCollection.map((res, key) => (
                                    <tr>
                                        <td>{res.customer_id}</td>
                                        <td>{res.customer_name}</td>
                                        <td>{res.address}</td>
                                        <td>{res.mailid}</td>
                                        <td>{res.phone_no}</td>
                                        <td>{res.account_no}</td>
                                        <td>{res.bank_id}</td>
                                        <td>{res.balance}</td>
                                        <td><button onClick={() => this.editData(key)}>Edit</button></td>
                                        <td><button onClick={() => this.deleteData(res.customer_id)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bankCollection: state.customer_details.customer_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBankData: bindActionCreators(getBank, dispatch),
        deletecustomer: bindActionCreators(deleteCustomer, dispatch),
        updateCustomer: bindActionCreators(updateCustomer, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBank)