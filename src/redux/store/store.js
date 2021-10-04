import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducer";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

store.subscribe(() => {
    console.log("store", store.getState())
})