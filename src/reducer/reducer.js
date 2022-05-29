import { combineReducers } from "redux";
import { menusReducer } from "../pages/Menus/Menu.reducer";

const rootReducer = combineReducers({
    menus: menusReducer,
})

export default rootReducer;