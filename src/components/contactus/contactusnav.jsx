import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../contactus/contactusnav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  return (
    <div className="nv">
      <header className="contactus-navbar">
        <nav className="contactus-nav-container">
          <div className="logo">Credennz</div>

          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="nav-links">
            <li>
              <Link
                to="/home"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>

            {/* Dropdown for Company */}
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span className="nav-link">Company</span>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/about"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-policy"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Company Policy
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/service"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="cmain">
        <div className="stars"></div>
        <div className="contact-form-container">
          <h1 className="contact-form-heading">
            Do you have a project <br /> you need help with?
          </h1>
          <div className="contact-form-info">
            <div className="contact-form-info-item">
              <span className="contact-form-icon">📧</span> hello@credennz.com
            </div>
            <div className="contact-form-info-item">
              <span className="contact-form-icon">📞</span> +91 7978013108
            </div>
          </div>
          <form className="contact-form">
            <div className="contact-form-input-group">
              <input
                type="text"
                placeholder="Name"
                className="contact-form-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact-form-input"
              />
            </div>
            <textarea
              placeholder="Your message"
              className="contact-form-textarea"
            ></textarea>
            <button type="submit" className="contact-form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
