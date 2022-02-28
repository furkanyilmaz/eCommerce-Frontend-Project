import React from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Popular from "../components/Popular";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import BenefitContents from "../components/BenefitContents";
import Footer from "../components/Footer";
import LoginDialog from "../components/LoginDialog";
import Navbar from "../components/Header/Navbar/Navbar";

export default function Home() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  return (
    <div>
      {openLoginDialog && <LoginDialog closeLoginDialog={setOpenLoginDialog} />}

      <Navbar setOpenDialog={setOpenLoginDialog} />
      <Header />
      <Popular />
      <Banner />
      <Featured />
      <BenefitContents />
      <Footer />
    </div>
  );
}
