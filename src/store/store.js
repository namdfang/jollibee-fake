import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";

const initialValue = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;