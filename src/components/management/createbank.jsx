import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCustomerToDb, editCustomer, updateCustomer } from "../../redux/action/bank.action";
import { getBankID } from "../../redux/action/transdrop.action";
import BG3 from '../image/BG3.jpg';
import Button from 'react-bootstrap/Button';

class CreateBank extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer_id: this.props.editData.customer_id ? this.props.editData.customer_id : "",
            customer_name: this.props.editData.customer_name ? this.props.editData.customer_name : "",
            address: this.props.editData.address ? this.props.editData.address : "",
            mailid: this.props.editData.mailid ? this.props.editData.mailid : "",
            phone_no: this.props.editData.phone_no ? this.props.editData.phone_no : "",
            account_no: this.props.editData.account_no ? this.props.editData.account_no : "",
            bank_id: this.props.editData.bank_id_id ? this.props.editData.bank_id : "",
            balance: this.props.editData.balance ? this.props.editData.balance : ""
        }
        this.props.getbankid()
    }
    saveData = () => {
        this.props.addcustomertodb({ customer_id: this.state.customer_id, customer_name: this.state.customer_name, address: this.state.address, mailid: this.state.mailid, phone_no: this.state.phone_no, account_no: this.state.account_no, bank_id: this.state.bank_id, balance: this.state.balance })
    }
    editData = () => {
        this.props.editCustomer(this.state, this.props.editData.customer_id)
        console.log(this.state)
        this.props.updateCustomer({})
        this.props.history.push('/viewcustomer')
    }

    render() {
        let { bankIdCollection } = this.props;
        let { editData } = this.props
        return (
            <>
                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <b style={{ color: "white" }}>Customer Id </b> <input type="text" value={this.state.customer_id} onChange={(event) => { this.setState({ customer_id: event.target.value }) }} />
                    <b style={{ color: "white" }}>Customer Name</b> <input type="text" value={this.state.customer_name} onChange={(event) => { this.setState({ customer_name: event.target.value }) }} />
                    <b style={{ color: "white" }}>Address</b> <input type="text" value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }} />
                    <b style={{ color: "white" }}>Mail Id</b>  <input type="text" value={this.state.mailid} onChange={(event) => { this.setState({ mailid: event.target.value }) }} />
                    <b style={{ color: "white" }}>Phone Number</b>  <input type="text" value={this.state.phone_no} onChange={(event) => { this.setState({ phone_no: event.target.value }) }} />
                    <b style={{ color: "white" }}>Account Number </b> <input type="text" value={this.state.account_no} onChange={(event) => { this.setState({ account_no: event.target.value }) }} />
                    <b style={{ color: "white" }}>Bank Id</b> <select name="bankid" value={this.state.bank_id} onChange={(event) => this.setState({ bank_id: event.target.value })}>
                        {
                            bankIdCollection.map(res => (
                                <option value={res.bank_id} >{res.ifsc}/{res.bank}/{res.branch}</option>
                            )
                            )
                        }
                    </select>
                    {this.state.bank_id}
                    <b style={{ color: "white" }}>Balance </b><input type="text" value={this.state.balance} onChange={(event) => { this.setState({ balance: event.target.value }) }} />
                    <br />
                    {editData.customer_id ? <Button variant="dark" onClick={this.editData}>Update</Button> : <Button variant="dark" onClick={this.saveData}>Create</Button>}
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addcustomertodb: bindActionCreators(addCustomerToDb, dispatch),
        getbankid: bindActionCreators(getBankID, dispatch),
        editCustomer: bindActionCreators(editCustomer, dispatch),
        updateCustomer: bindActionCreators(updateCustomer, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        bankIdCollection: state.bankid,
        editData: state.customer_details.editData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBank)