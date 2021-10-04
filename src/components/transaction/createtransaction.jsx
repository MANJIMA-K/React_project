import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTransactionToDb } from "../../redux/action/bank.action";
import { getType } from "../../redux/action/transdrop.action";
import Button from 'react-bootstrap/Button';
import BG3 from '../image/BG3.jpg';

class CreateTransaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            transaction_type: "",
            account_no: "",
            amount: "",
            recepient: "",
            transaction_date: ""
        }
        this.props.gettype()
    }
    saveData = () => {
        this.props.addtransactiontodb({ transaction_type: this.state.transaction_type, account_no: this.state.account_no, amount: this.state.amount, recepient: this.state.recepient, transaction_date: this.state.transaction_date })
    }


    render() {
        let { transTypeCollection } = this.props
        return (
            <>

                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <b style={{ color: "white" }}>Transaction Type </b><select name="transtype" onChange={(event) => this.setState({ transaction_type: event.target.value })}>
                        {
                            transTypeCollection.map(res => (
                                <option value={res.transaction_id} >{res.transaction_type}</option>
                            )
                            )
                        }
                    </select>
                    {this.state.transaction_type}<br />
                    <b style={{ color: "white" }}>Account Number</b>  <input type="text" onChange={(event) => { this.setState({ account_no: event.target.value }) }} />
                    <b style={{ color: "white" }}>Amount</b>  <input type="text" onChange={(event) => { this.setState({ amount: event.target.value }) }} />
                    {
                        this.state.transaction_type == "3" ?
                            <div>
                                <b style={{ color: "white", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>Recepient Account Number</b><input type="text" onChange={(event) => { this.setState({ recepient: event.target.value }) }} />
                            </div>
                            : <div></div>
                    }
                    <b style={{ color: "white" }}>Transaction Date  </b> <input type="date" onChange={(event) => { this.setState({ transaction_date: event.target.value }) }} />
                    <br />
                    <Button variant="dark" onClick={this.saveData}>Confirm</Button>{' '}

                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addtransactiontodb: bindActionCreators(addTransactionToDb, dispatch),
        gettype: bindActionCreators(getType, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        transTypeCollection: state.transtype
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransaction)