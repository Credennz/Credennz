import React from "react";

export default function DynamicService() {
  return (
    <div>
      <div className="dynamic-container">
        <div className="dynamic-content">
          <div className="dynamic-subtitle">tech enable your business</div>
          <h1 className="dynamic-title">
            Engineering and <br/>Technology Integrations
          </h1>
          <p className="dynamic-description">
            Streamline operations with our integration solutions, featuring <b>API
            Development and Integration </b> for seamless connectivity,<b> Cloud
            Migration Services</b> for scalability and flexibility, and <b>Third-Party
            Software Integration </b> to expand functionality effortlessly.
          </p>
          <a href="#" className="dynamic-button">
            Read More
          </a>
        </div>
        <div className="dynamic-image-wrapper">
          <img
            src="img/sv1.jpg"
            alt="Person using smartphone"
            className="dynamic-image"
          />
        </div>
      </div>
    </div>
  );
}
