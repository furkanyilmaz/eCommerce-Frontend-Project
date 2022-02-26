import React from "react";
import Header from "../components/Header/Header";
import Popular from "../components/Popular";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import BenefitContents from "../components/BenefitContents";
import Footer from "../components/Footer";
import LoginDialog from "../components/LoginDialog";

export default function Home() {
  return (
    <div>
      <Header />
      <Popular />
      <Banner />
      <Featured />
      <BenefitContents />
      <Footer />
      {/* <LoginDialog /> */}
    </div>
  );
}
