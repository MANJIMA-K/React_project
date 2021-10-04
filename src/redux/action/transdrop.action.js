export const SET_TYPE_DATA = "SET_TYPE_DATA";
export const SET_BANKID_DATA = "SET_BANKID_DATA";
export const getType = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/transactions/drop')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_TYPE_DATA,
                    payload: data
                }))
    }
}

//bank id dropdown
export const getBankID = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/bank')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_BANKID_DATA,
                    payload: data
                }))
    }
}