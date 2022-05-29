import react from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.scss";

export default function Footer() {
  return (
    <section className="footer row text-white py-5 mx-0">
      <div className="col-2 text-end">
        <img
          className="w-50"
          src="https://jollibee.com.vn/images/LogoJB_New-02a.png"
          alt="logo"
        />
      </div>
      <div className="col-4">
        <p>
          Địa chỉ: Lầu 5, tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu, Quận
          3, Tp. Hồ Chí Minh, Việt Nam
        </p>
        <p>Tổng đài: 1900-1533</p>
        <p>Hộp thư góp ý: jbvnfeedback@jollibee.com.vn</p>
        <p>Gửi phản hồi đến Trụ sở chính Jollibee Việt Nam TẠI ĐÂY</p>
      </div>
      <div className="col-3">
        <img
          src="https://jollibee.com.vn/images/home/delivery-lg.png"
          alt="contact"
        />
      </div>
      <div className="col-3">
        <p>HÃY KẾT NỐI VỚI CHÚNG TÔI</p>
        <FaFacebookF className="me-2" />
        <AiFillGoogleCircle className="me-2" />
        <AiFillTwitterCircle />
      </div>
    </section>
  );
}
