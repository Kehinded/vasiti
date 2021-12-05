import "./App.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderSection from "./sections/HeaderSection";
import StoriesSection from "./sections/StoriesSection";
import Footer from "./sections/Footer";
import Modal from "react-awesome-modal";
import SubmitForm from "./components/SubmitForm";
import VasitiContext from "./store/Context";
import { FaTimes } from "react-icons/fa";
import SuccessImg from "./assets/success.png"

function App() {
  const vasitiCtx = useContext(VasitiContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HeaderSection />
          <StoriesSection />
          <Footer />
          <Modal visible={vasitiCtx.showModal.modal} effect="fadeInUp">
            <FaTimes
              onClick={() => vasitiCtx.setShowModalFunc("close")}
              style={{
                position: "absolute",
                width: "2rem",
                height: "2rem",
                top: ".6rem",
                right: ".64rem",
                backgroundColor: "#ff5c00",
                color: "#ffffff",
                cursor: "pointer",
                transform: "scale(1.7)",
                padding: ".2rem",
                borderTopRightRadius: ".3rem",
              }}
            />
            <SubmitForm />
          </Modal>
          {/* modal succcess */}
          <Modal visible={vasitiCtx.showModal.success} effect="fadeInDown">
            <div className="success-box">
              <figure className="img-box">
                <img src={SuccessImg} alt="" className="img" />
              </figure>
              <p className="big-text">Thank you for sharing your story!</p>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="btn" onClick={() => vasitiCtx.setShowModalFunc("close")}>close</button>
            </div>
          </Modal>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
