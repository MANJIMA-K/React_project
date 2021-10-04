import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getView } from "../../redux/action/bank.action";
import Table from 'react-bootstrap/Table';
import BG3 from '../image/BG3.jpg'

class View extends React.Component {
    constructor(props) {
        super(props)
        this.props.getViewData()
    }
    render() {
        let { viewCollection } = this.props
        return (
            <>
                <div style={{ backgroundImage: `url(${BG3})`, width: "100%", height: "90%", position: "fixed", backgroundSize: "cover" }}>
                    <br /><br />
                    <Table striped bordered hover variant="primary" align="center" style={{ width: "50%" }}>
                        <thead>
                            <tr>
                                <th>BANK ID</th>
                                <th>IFSC</th>
                                <th>BANK</th>
                                <th>BRANCH</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                viewCollection.map(res => (

                                    <tr>
                                        <td>{res.bank_id}</td>
                                        <td>{res.ifsc}</td>
                                        <td>{res.bank}</td>
                                        <td>{res.branch}</td>
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
        viewCollection: state.bank_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getViewData: bindActionCreators(getView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)