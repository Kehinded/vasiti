import "./App.css";
import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderSection from "./sections/HeaderSection";
import StoriesSection from "./sections/StoriesSection";
import Footer from "./sections/Footer";
import Modal from "react-awesome-modal";
import SubmitForm from "./components/SubmitForm";
import VasitiContext from "./store/Context";

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
            <SubmitForm />
          </Modal>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
