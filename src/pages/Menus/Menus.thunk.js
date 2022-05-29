import { getAllFoodList } from "../../api/food.api";
import * as action from "./Menus.actions";

export const getFoodList = () => (dispatch) => {
    return getAllFoodList().then((res) => {
        dispatch(action.getAllFoodRequest(res));
        console.log(res);
        return res;
    })
}