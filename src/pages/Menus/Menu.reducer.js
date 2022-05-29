import producer from "immer";
import * as types from "./Menus.constant";

const initialState = {
  foodList: [],
};

export const menusReducer = (state = initialState, action) =>
  producer(state, (draft) => {
    switch (action.type) {
      case types.GET_FOOD_LIST_REQUEST:
        draft.foodList = action.payload;
        break;
      default:
        return state;
    }
  });
