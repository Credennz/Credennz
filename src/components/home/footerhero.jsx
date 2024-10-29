import React from "react";

export default function Footerhero() {
  return (
    <div>
      <section
        class="hero-section"
        style={{
          background: `url('${process.env.PUBLIC_URL}/img/img.png')`,
        }}
      >
        <div class="container">
          <div class="hero-content">
            <h1>
              Take your business to <br /> the next level.
            </h1>
            <p>
              Get more insights and reports for your startup and improve the
              <br /> customer relationships.
            </p>
            <a href="#" class="cta-button">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
