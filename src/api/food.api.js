import request from "../utilities/requestFood";

export function getAllFoodList() {
  return request({
    url: "/foods",
    method: "get",
  });
}
