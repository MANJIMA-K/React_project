import { SET_TYPE_DATA } from "../action/transdrop.action";
import { SET_BANKID_DATA } from "../action/transdrop.action"

export const typeReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_TYPE_DATA:
            return payload
        default:
            return state
    }
}

export const bankidReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_BANKID_DATA:
            return payload
        default:
            return state
    }
}