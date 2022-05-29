import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import Home from "../../pages/Home/Home"
import "./LoginModal.scss";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD_zLhLBM0mL_G_DPj6z1h9HFXRHOIWq-A",
  authDomain: "jollibee-c0f11.firebaseapp.com",
};
firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  signInSuccessUrl: "/Home",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};



export default function LoginModal(props) {
  const { showModal, handleModal } = props;

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          // handle something
          console.log("user not login");
          return;
        }
        console.log("login user:", user.displayName)
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <Modal show={showModal} className="login-modal text-center text-white">
      <div className="modal-top pb-3">
        <img src="https://jollibee.com.vn/images/logo.png" alt="logo" />
        <p className="fs-4 fw-bold">ĐĂNG NHẬP BẰNG EMAIL</p>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="modal-bottom">
        <p className="text-black mt-2">Quên mật khẩu?</p>
        <button className="btn btn-login fw-bold px-4 mb-3">ĐĂNG NHẬP</button>
        <br />
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        {/* <button className="btn btn-google btn-social  text-white fw-bold mb-2">
          <FaGoogle className="me-2 mb-2" /> ĐĂNG NHẬP BẰNG GOOGLE
        </button>
        <button className="btn btn-facebook btn-social text-white fw-bold">
          <FaFacebookF className="mb-2 me-2" />
          ĐĂNG NHẬP BẰNG FACEBOOK
        </button> */}
        <p className="text-black mt-3">
          Bạn chưa có tài khoản? Nhấn vào đây để đăng ký.
        </p>
      </div>
      <TiDelete className="btn-hidden" onClick={() => handleModal()} />
    </Modal>
  );
}
