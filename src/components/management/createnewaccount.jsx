import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNewAccountToDb } from "../../redux/action/bank.action";
import { getBankID } from "../../redux/action/transdrop.action";
import BG3 from '../image/BG3.jpg';
import Button from 'react-bootstrap/Button';

class CreateStatement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer_id: "",
            account_no: "",
            bank_id: "",
            balance: ""
        }
        this.props.getBankID()
    }
    saveData = () => {
        this.props.addNewAccountToDb({ customer_id: this.state.customer_id, account_no: this.state.account_no, bank_id: this.state.bank_id, balance: this.state.balance }, this.state.customer_id)
    }

    render() {
        let { statementCollection } = this.props
        return (
            <>
                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <br />
                    <b style={{ color: "white" }}>Customer Id</b>  <input type="text" onChange={(event) => { this.setState({ customer_id: event.target.value }) }} />{this.state.customer_id}
                    <b style={{ color: "white" }}>Account Number</b>  <input type="text" onChange={(event) => { this.setState({ account_no: event.target.value }) }} />{this.state.account_no}
                    <b style={{ color: "white" }}>Bank Id</b> <select name="bankid" onChange={(event) => this.setState({ bank_id: event.target.value })}>
                        {
                            statementCollection.map(res => (
                                <option value={res.bank_id} >{res.ifsc}/{res.bank}/{res.branch}</option>
                            )
                            )
                        }
                    </select>
                    {this.state.bank_id}<br />
                    <b style={{ color: "white" }}>Balance</b> <input type="text" onChange={(event) => { this.setState({ balance: event.target.value }) }} />{this.state.balance}
                    <br />
                    <Button variant="dark" onClick={this.saveData}>Save</Button>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAccountToDb: bindActionCreators(addNewAccountToDb, dispatch),
        getBankID: bindActionCreators(getBankID, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        statementCollection: state.bankid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStatement)