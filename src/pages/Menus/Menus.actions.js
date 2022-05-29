import * as types from "./Menus.constant";

export const getAllFoodRequest = (payload) => ({
    type: types.GET_FOOD_LIST_REQUEST,
    payload,
})