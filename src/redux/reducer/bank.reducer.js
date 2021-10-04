import { SET_BANK_DATA } from "../action/bank.action";
import { SET_TRANSACTION_DATA } from "../action/bank.action";
import { SET_VIEW_DATA } from "../action/bank.action";
import { SET_EDIT_DATA } from "../action/bank.action";
import { SET_STATEMENT_DATA } from "../action/bank.action";
import { SET_CUSTOMER_DATA } from "../action/bank.action"
//customer post and update
export const bankReducer = (state = { customer_details: [], editData: {} }, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_BANK_DATA:
            return { ...state, customer_details: payload }
        case SET_EDIT_DATA:
            console.log(state.editData)
            return { ...state, editData: payload }
        default:
            return state
    }
}

//transaction
export const transactionReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_TRANSACTION_DATA:
            return payload
        default:
            return state
    }
}

//bank
export const viewReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_VIEW_DATA:
            return payload
        default:
            return state
    }
}

//get by id
export const statementReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_STATEMENT_DATA:
            return payload
        default:
            return state
    }
}

//get customer by id
export const customerReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_CUSTOMER_DATA:
            return payload
        default:
            return state
    }
}