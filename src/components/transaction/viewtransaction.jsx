import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTransaction } from "../../redux/action/bank.action";
import Table from 'react-bootstrap/Table';
import BG3 from '../image/BG3.jpg'


class ViewTransaction extends React.Component {
    constructor(props) {
        super(props)
        this.props.getTransactionData()
    }

    render() {
        let { transactionCollection } = this.props
        return (
            <>
                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}>
                    <br />
                    <Table striped bordered hover variant="primary" align="center" style={{ width: "60%" }}>
                        <thead>
                            <tr>
                                <th>Transaction Type</th>
                                <th>Account Number</th>
                                <th>Amount</th>
                                <th>Recepient</th>
                                <th>Transaction Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactionCollection.map(res => (
                                    <tr>
                                        <td>{res.transaction_type}</td>
                                        <td>{res.account_no}</td>
                                        <td>{res.amount}</td>
                                        <td>{res.recepient}</td>
                                        <td>{res.transaction_date}</td>

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
        transactionCollection: state.transaction_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTransactionData: bindActionCreators(getTransaction, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTransaction)