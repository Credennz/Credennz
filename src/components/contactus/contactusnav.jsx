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
        <h1>
          Do you have a project <br /> you need help with?
        </h1>
        <div className="contact-info">
          <div className="divide">
            <button className="contact-button">
              <svg width="16" height="16" fill="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              </svg>
              hello@credennz.com
            </button>
            <button className="contact-button">
              <svg width="16" height="16" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11 18.84 19.5 19.5 0 0 1 5 12 19.79 19.79 0 0 1 1.18 4 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 7978013108
            </button>
          </div>
        </div>
        <form>
          <div className="cardd">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="card2">
            <textarea
              placeholder="Tell us about your project"
              rows="8"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
