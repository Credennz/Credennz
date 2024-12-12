import React from "react";
export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="service-image-wrapper">
        <img
          src="img/sv3.png"
          alt="Person using smartphone"
          className="service-image"/>
      </div>
      <article className="service-details">
        <span className="service-tagline">Embrace the easeness</span>
        <h1 className="service-title">E-commerce and<br/> No-Code Development</h1>
        <p className="service-description">
          Build and manage your online presence with ease. We specialize in 
          <b> Shopify and WordPress Development </b>, offer Product <b>Management solutions</b>,
          and provide<b> Store and System Management</b> for hassle-free operations.
        </p>
        <a href="#" className="service-link-button"> Read More </a>
      </article>
    </section>
  );
}