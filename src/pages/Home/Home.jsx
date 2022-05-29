import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "swiper/css";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    // <MainLayout>
    <>
      <section className="swiper">
        <Swiper spaceBetween={0} slidesPerView={1} Autoplay={true}>
          <SwiperSlide key="1" className="swiper-slide">
            <img
              src="https://jollibee.com.vn/uploads/page/70ea30a9385d56-z3299161200462_4ce720d8b427cea6858021e7fd691ef8.jpg"
              alt="slide 1"
            />
          </SwiperSlide>
          <SwiperSlide key="2" className="swiper-slide">
            <img
              src="https://jollibee.com.vn/uploads/page/49d7c6837bf812-z3299153609280_b01dff88a75d549d25874227e90f90ae.jpg"
              alt="slide 2"
            />
          </SwiperSlide>
          <SwiperSlide key="3" className="swiper-slide">
            <img
              src="https://jollibee.com.vn/uploads/page/46193eddc3aca3-bannerwebsite1.jpg"
              alt="slide 3"
            />
          </SwiperSlide>
        </Swiper>
        <button className="btn btn-order fs-4 fw-bold border-0 px-5 rounded-3">
          <Link to="/menus">ĐẶT HÀNG</Link>
        </button>
      </section>
      <section className="food row m-0">
        <div className="food-text text-white text-center col-3 d-flex flex-column justify-content-center align-items-center px-5 me-4">
          <img
            className="py-3"
            src="https://jollibee.com.vn/images/logo.png"
            alt="logo"
          />
          <h3 className="fs-1">
            ĂN GÌ
            <br /> HÔM NAY
          </h3>
          <p className="py-2">
            Thực đơn Jollibee đa dạng và phong phú, có rất nhiều sự lựa chọn cho
            bạn, gia đình và bạn bè.
          </p>
        </div>
        <div className="food-item col-2">
          <img
            src="https://jollibee.com.vn/uploads/setting/4b675b9eef6680-menugagionvuive.png"
            alt=""
          />
          <div className="item-title mx-3 text-center">
            <img
              className="my-4"
              src="https://jollibee.com.vn/uploads/setting/e17856b74b7a0e-titlegagionvuive.png"
              alt="img"
            />
            <button className="btn mb-4 px-4 fw-bold border-0">ĐẶT HÀNG</button>
          </div>
        </div>
        <div className="food-item col-2">
          <img
            src="https://jollibee.com.vn/uploads/setting/32f3bc4c206abb-cmg.png"
            alt=""
          />
          <div className="item-title mx-3 text-center">
            <img
              className="my-4"
              src="https://jollibee.com.vn/uploads/setting/0a7c5c03bdcaaf-titlegasotcay.png"
              alt="img"
            />
            <button className="btn mb-4 px-4 fw-bold border-0">ĐẶT HÀNG</button>
          </div>
        </div>
        <div className="food-item col-2">
          <img
            src="https://jollibee.com.vn/uploads/setting/55678394707570-menumiysotbobam.png"
            alt=""
          />
          <div className="item-title mx-3 text-center">
            <img
              className="my-4"
              src="	https://jollibee.com.vn/uploads/setting/870d84c56fb2b9-titlemiysotbobam.png"
              alt="img"
            />
            <button className="btn mb-4 px-4 fw-bold border-0">ĐẶT HÀNG</button>
          </div>
        </div>
        <div className="food-item col-2">
          <img
            src="https://jollibee.com.vn/uploads/setting/35015b4c4ce69a-exporttradao.png"
            alt=""
          />
          <div className="item-title mx-3 text-center">
            <img
              className="my-4"
              src="https://jollibee.com.vn/uploads/setting/3c96f92fbe5bc3-montrangmieng01.png"
              alt="img"
            />
            <button className="btn mb-4 px-4 fw-bold">ĐẶT HÀNG</button>
          </div>
        </div>
      </section>
      <section>
        <div className="service text-center py-5">
          <div>
            <h3 className="mt-5 fs-1">DỊCH VỤ</h3>
            <p className="fs-5 mt-3">
              TẬN HƯỞNG NHỮNG KHOẢNH KHẮC TRỌN VẸN CÙNG JOLLIBEE
            </p>
          </div>
          <ul className="row mx-0 justify-content-center mt-5 pt-5">
            <li className="col-3 mx-2">
              <div className="image mb-3">
                <img
                  className="w-100"
                  src="https://jollibee.com.vn/images/service/2.png"
                  alt="service"
                />
              </div>
              <p>ĐẶT TIỆC SINH NHẬT</p>
              <button className="btn px-4">XEM THÊM</button>
            </li>
            <li className="col-3 mx-2">
              <div className="image mb-3">
                <img
                  className="w-100"
                  src="https://jollibee.com.vn/images/service/3.png"
                  alt="service"
                />
              </div>
              <p>ĐẶT TIỆC SINH NHẬT</p>
              <button className="btn px-4">XEM THÊM</button>
            </li>
            <li className="col-3 mx-2">
              <div className="image mb-3">
                <img
                  className="w-100"
                  src="https://jollibee.com.vn/images/service/4.png"
                  alt="service"
                />
              </div>
              <p>ĐẶT TIỆC SINH NHẬT</p>
              <button className="btn px-4">XEM THÊM</button>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="commit text-center py-5">
          <h3 className="fw-bold my-5">JOLLIBEE, XIN CHÀO</h3>
          <p className="text-justify">
            Chúng tôi là Jollibee Việt Nam với hơn 100 cửa hàng trên khắp cả
            nước, chúng tôi mong muốn đem đến niềm vui ẩm thực cho mọi gia đình
            Việt bằng những món ăn có chất lượng tốt, hương vị tuyệt hảo, dịch
            vụ chu đáo với một mức giá hợp lý… Hãy đến và thưởng thức nhé!
          </p>
          <button className="btn px-5 mt-5">ĐẶT HÀNG</button>
        </div>
      </section>
      <section className="news text-center py-5 my-5">
        <h3>TIN TỨC</h3>
        <div className="row mx-0 my-5">
          <img
            src="https://jollibee.com.vn/uploads/thumbnail/post/35bfea6e2be1b6-photo3164057428354115867386131.jpg"
            alt="new"
            className="col-4 mx-0 px-1 w-25"
          />
          <img
            src="https://jollibee.com.vn/uploads/thumbnail/post/9ae7d128fcbee1-thumbnailanh87881640402948.jpg"
            alt="new"
            className="col-4 mx-0 px-1 w-25"
          />
          <img
            src="https://jollibee.com.vn/uploads/thumbnail/post/d3bcb5e267aff3-image006.jpg"
            alt="new"
            className="col-4 mx-0 px-1 w-25"
          />
          <img
            src="https://jollibee.com.vn/uploads/thumbnail/post/ce17e25a745d3d-1600524922w50063841568619115.png"
            alt="new"
            className="col-4 mx-0 px-1 w-25"
          />
        </div>
        <button className="btn">XEM THÊM</button>
      </section>
    </>
    // {/* </MainLayout> */}
  );
}
