import React from "react";
import Abounav from "../components/abouts page/abounav";
import "../components/abouts page/aboutnav.css";
import MeetTheFounders from "../components/abouts page/meetTheFounders";
import VideoPlayer from "../components/abouts page/aboutvedio";
import Footer from "../components/home/footer";
import "../components/home/footer.css";
import Footerhero from "../components/home/footerhero";
import "../components/home/footerhero.css";
import Trusthero from "../components/home/trusthero";
import Abouttest from "../components/abouts page/abouttest";
import "../components/home/trusthero.css";
export default function About() {
  return (
    <div>
      <Abounav />
      <Abouttest />
      <Trusthero />
      <MeetTheFounders />
      <VideoPlayer />
      <Footerhero />
      <Footer />
    </div>
  );
}
