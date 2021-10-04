export const SET_BANK_DATA = "SET_BANK_DATA";
export const SET_TRANSACTION_DATA = "SET_TRANSACTION_DATA";
export const SET_VIEW_DATA = "SET_VIEW_DATA";
export const SET_EDIT_DATA = "SET_EDIT_DATA";
export const SET_STATEMENT_DATA = "SET_STATEMENT_DATA";
export const SET_CUSTOMER_DATA = "SET_CUSTOMER_DATA"
//customer
export const getBank = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/customer')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_BANK_DATA,
                    payload: data
                }))
    }
}
export const addCustomerToDb = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/customer/newcustomer', {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => { console.log(response) })
    }
}

//transaction
export const getTransaction = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/transactions')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_TRANSACTION_DATA,
                    payload: data
                }))
    }
}
export const addTransactionToDb = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/transactions', {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => { console.log(response) })
    }
}

//bank
export const getView = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4200/bank')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_VIEW_DATA,
                    payload: data
                }))
    }
}

//delete customer
export const deleteCustomer = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4200/customer/${id}`, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'DELETE',

        }).then(response => response.json())
            .then(response => { console.log(response) })
    }
}

//update customer

export const updateCustomer = (data) => {
    return {
        type: SET_EDIT_DATA,
        payload: data
    }
}
export const editCustomer = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:4200/customer/${id}`, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        })

            .then(response => response.json())
            .then(response => { console.log(response) })
    }
}

//get by id 
export const getTransactionDetails = (id, from, to) => {
    return (dispatch) => {
        fetch(`http://localhost:4200/transactions/${id}/${from}/${to}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: SET_STATEMENT_DATA,
                    payload: data
                })
            })
    }
}

//post by id
export const addNewAccountToDb = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:4200/customer/oldcustomer/${id}`, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => { console.log(response) })
    }
}

//get customer by id
export const getCustomerById = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4200/customer/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: SET_CUSTOMER_DATA,
                    payload: data
                })
            })
    }
}