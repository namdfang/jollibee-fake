import React, { useState } from "react";
import Logo from "../../assets/images/LogoJB.png";
import Contact from "../../assets/images/contact-header.png";
import Avatar from "../../assets/images/header-user-img.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";
import LoginModal from "../LoginModal/LoginModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="navbar d-flex px-3 py-0">
      <div className="navbar-logo ps-5">
        <img src={Logo} alt="logoJB" />
      </div>
      <div className="d-flex flex-column justify-content-between align-items-bottom flex-fill px-5">
        <div
          className="navbar-menu-top d-flex justify-content-end align-items-center"
          onClick={() => handleModal()}
        >
          <img src={Avatar} className="avatar rounded-circle" alt="avatar" />
          <span className="text-white ms-2 fw-bold"> Đăng ký / Đăng nhập </span>
        </div>
        <div className="navbar-menu-bottom d-flex justify-content-center fs-6 mt-2">
          <Link to="/">TRANG CHỦ</Link>
          <Link
            to="/menus"
            className="menu-food text-link position-relative text-decoration-none text-white"
          >
            THỰC ĐƠN
            <section className="text-center text-black">
              <ul className="menu-hover position-absolute d-flex list-unstyled px-5">
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/mon-moi-mon-ngon.png"
                      alt="food"
                    />
                    <p>COMBO</p>
                  </a>
                </li>
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/ga-gion-vui-ve.png"
                      alt="food"
                    />
                    <p>GÀ GIÒN VUI VẺ</p>
                  </a>
                </li>
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/ga-sot-cay.png"
                      alt="food"
                    />
                    <p>GÀ SỐT CAY</p>
                  </a>
                </li>
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/mi-y.png"
                      alt="food"
                    />
                    <p>MỲ Ý SỐT BÒ BẰM</p>
                  </a>
                </li>
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/burger-sandwich.png"
                      alt="food"
                    />
                    <p>BERGER VÀ CƠM</p>
                  </a>
                </li>
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/phan-an-phu.png"
                      alt="food"
                    />
                    <p>PHẦN ĂN PHỤ</p>
                  </a>
                </li>
                <li className="menu-hover-item mx-3">
                  <a>
                    <img
                      src="https://jollibee.com.vn/upload/files/menu/mon-trang-mieng.png"
                      alt="food"
                    />
                    <p>MÓN TRÁNG MIỆNG</p>
                  </a>
                </li>
              </ul>
            </section>
          </Link>
          <a>VỀ JOLLIBEE</a>
          <a>KHUYẾN MẠI</a>
          <a>DỊCH VỤ</a>
          <a>TIN TỨC</a>
          <a>CỬA HÀNG</a>
          <a>LIÊN HỆ</a>
          <a>TUYỂN DỤNG</a>
        </div>
      </div>
      <div>
        <img src={Contact} alt="contact" />
      </div>
      <LoginModal handleModal={handleModal} showModal={showModal} />
    </section>
  );
}
