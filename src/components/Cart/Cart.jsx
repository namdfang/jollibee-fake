import React, { useState } from "react";
import "./Cart.scss";
import { BsCart4, BsChevronDown, BsPlusLg } from "react-icons/bs";
import { TiDelete, TiMinus } from "react-icons/ti";

export default function Cart() {
  const [smallCart, setSmallCart] = useState(true);
  const cart = [
    {
      name: "03 GÀ GIÒN VUI VẺ + 01 MỲ Ý SỐT BÒ BẰM + 02 KHOAI TÂY CHIÊN VỪA + 2 LY PEPSI VỪA",
      cost: "149.000 đ",
    },
    {
      name: "6 MIẾNG GÀ GIÒN",
      cost: "174.000 đ",
    },
    {
      name: "CƠM GÀ GIÒN + NƯỚC NGỌT",
      cost: "45.000 đ",
    },
  ];
  return (
    <section className="cart">
      <div
        className={
          !smallCart
            ? "cart-small fs-2 fw-bold text-center d-flex justify-content-center align-items-center d-none"
            : "cart-small fs-2 fw-bold text-center d-flex justify-content-center align-items-center"
        }
        onClick={() => setSmallCart(false)}
      >
        <BsCart4 className="icon me-2" />
        <span>174.000 đ</span>
      </div>
      <div
        className={
          smallCart
            ? "cart-big text-center fs-6 px-3 py-2 fw-bold d-none"
            : "cart-big text-center fs-6 px-3 py-2 fw-bold"
        }
      >
          <BsChevronDown className="btn-hidden-big-cart fs-2" onClick={() => (setSmallCart(true))}/>
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item position-relative mt-2">
              <p className="me-5 text-start mb-0">{item.name}</p>
              <div className="d-flex justify-content-between align-items-center my-2">
                <div className="d-flex justify-content-start align-items-center mb-1">
                  <BsPlusLg />
                  <span className="mx-2">1</span>
                  <TiMinus />
                </div>
                <p className="text-end mb-0">{item.cost}</p>
              </div>
              <TiDelete className="icon-delete fs-5" />
            </div>
          ))}
          <div className="d-flex justify-content-between mt-2 fs-4">
            <p>Tổng</p>
            <p>149.000 đ</p>
          </div>
        </div>
        <button className="btn btn-pay mb-2 fw-bold">THANH TOÁN</button>
      </div>
    </section>
  );
}
