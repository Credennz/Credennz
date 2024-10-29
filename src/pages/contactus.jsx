import React from "react";
import Contactusnav from "../components/contactus/contactusnav";
import "../components/contactus/contactusnav.css";
import Footer from "../components/home/footer";
import "../components/home/footer.css";
import Footerhero from "../components/home/footerhero";
import "../components/home/footerhero.css";
import Testimonial from "../components/home/testimonial";
import "../components/home/testimonial.css";
export default function Contactus() {
  return (
    <div>
      <Contactusnav />
      <Testimonial />
      <Footerhero />
      <Footer />
    </div>
  );
}
