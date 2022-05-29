import react, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Cart from "../../components/Cart/Cart";
import "./Menus.scss";
import { useDispatch, useSelector } from "react-redux";
import * as action from "./Menus.thunk";

export default function Menus() {
  const dispatch = useDispatch();
  const foodList = useSelector((state) => ({
    foodList: state.menus.foodList,
  }));

  useEffect(() => {
    dispatch(action.getFoodList()).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    // <MainLayout>
    <>
      <div>
        <img
          className="w-100"
          src="https://jollibee.com.vn/uploads/group/640f3ac55b0e2b-bannerthcn.jpg"
          alt="chicken"
        />
        <section className="food-types text-center sticky-top text-white">
          <a>COMBO</a>
          <a>GÀ GIÒN VUI VẺ</a>
          <a>GÀ SỐT CAY</a>
          <a>MỲ Ý SỐT BÒ BẰM</a>
          <a>BERGER VÀ CƠM</a>
          <a>PHẦN ĂN PHỤ</a>
          <a>MÓN TRÁNG MIỆNG</a>
        </section>
        <section className="pt-5">
          <div className="food-list py-5">
            <div className="row px-5">
              {foodList.foodList.map((item, index) => (
                <div
                  key={index}
                  className={
                    (index + 1) % 3 === 0
                      ? "food-list-item hidden-right col-4 text-center py-3 px-1"
                      : "food-list-item col-4 text-center py-3 px-1"
                  }
                >
                  <img src={item.image} alt="image food" />
                  <h3 className="">{item.name}</h3>
                  <p>{item.cost} đ</p>
                  <button className="btn">ĐẶT HÀNG</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Cart />
    </>
    // </MainLayout>
  );
}
