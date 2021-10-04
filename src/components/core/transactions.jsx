import React from "react";
import Button from 'react-bootstrap/Button';
import BG3 from '../image/BG3.jpg'

class Transaction extends React.Component {

    transactionDetails = () => {
        this.props.history.push("/viewtransaction")
    }
    doTransaction = () => {
        this.props.history.push("/createtransaction")
    }
    transactionStatement = () => {
        this.props.history.push("/viewstatement")
    }

    render() {
        return (
            <>
                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}><br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '600px', height: '75px', marginLeft: '27%' }} onClick={this.transactionDetails}><h3>Transaction Details</h3></Button>{' '}<br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '600px', height: '75px', marginLeft: '27%' }} onClick={this.doTransaction}><h3>Create a Transaction</h3></Button>{' '}<br /><br />
                    <Button variant="outline-dark" style={{ align: 'center', width: '600px', height: '75px', marginLeft: '27%' }} onClick={this.transactionStatement}><h3>Transaction statement</h3></Button>{' '}<br /><br />
                </div>
            </>
        )
    }
}

export default Transaction