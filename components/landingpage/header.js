import { HelmetLanding } from "@utils";
import React from "react";

const Header = ({
  data
}) => {
  return (
    <React.Fragment>
      {/* <!--==========================
    Top Bar
  ============================--> */}
      <section id="topbar" className="d-none d-lg-block">
        <div className="container clearfix">
          <div className="contact-info float-left">
            <i className="fa fa-envelope-o"></i>{" "}
            <a href="mailto:contact@example.com">{data?.email}</a>
            <i className="fa fa-phone"></i> {data?.phone_number}
          </div>
          <div className="social-links float-right">
            <a href={data?.social_media?.twitter} target="__blank" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href={data?.social_media?.facebook} target="__blank" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href={data?.social_media?.instagram} target="__blank" className="instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href={data?.social_media?.whatsapp} target="__blank" className="whatsapp">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!--========================== */}
      {/* Header */}
      {/* ============================--> */}
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <a href="#body" className="scrollto" style={{ color: "#fdc134" }}>
                MES
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="#body"><img src="img/logo.png" alt="" title="" /></a>--> */}
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#body">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
