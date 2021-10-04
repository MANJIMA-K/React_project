import { combineReducers } from "redux";
import { bankReducer } from "./bank.reducer";
import { transactionReducer } from "./bank.reducer";
import { viewReducer } from "./bank.reducer";
import { typeReducer } from "./transdrop.reducer";
import { bankidReducer } from "./transdrop.reducer";
import { statementReducer } from "./bank.reducer";
import { customerReducer } from "./bank.reducer";


export const rootReducer = combineReducers({
    customer_details: bankReducer,
    transaction_details: transactionReducer,
    bank_details: viewReducer,
    transtype: typeReducer,
    bankid: bankidReducer,
    statement: statementReducer,
    customer: customerReducer
})