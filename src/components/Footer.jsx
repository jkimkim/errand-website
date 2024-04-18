import React from "react";
import "./css/footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="fw-semibold fs-5">About Airbnb</h3>
            <p className="fs-6">
              Airbnb is a global online marketplace for lodging and tourism
              experiences. Discover unique stays and experiences around the
              world.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-semibold fs-5">Explore</h3>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item">
                <a href="#">Stays</a>
              </li>
              <li className="list-group-item">
                <a href="#">Experiences</a>
              </li>
              <li className="list-group-item">
                <a href="#">Online Experiences</a>
              </li>
              <li className="list-group-item">
                <a href="#">Featured destinations</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="fw-semibold fs-5">For Hosts</h3>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item">
                <a href="#">Host your home</a>
              </li>
              <li className="list-group-item">
                <a href="#">Host an experience</a>
              </li>
              <li className="list-group-item">
                <a href="#">Responsible hosting</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="fw-semibold fs-5">Follow Us</h3>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item">
                <a href="#">Facebook</a>
              </li>
              <li className="list-group-item">
                <a href="#">Twitter</a>
              </li>
              <li className="list-group-item">
                <a href="#">Instagram</a>
              </li>
              <li className="list-group-item">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        {/* footer line */}
        <div className="footer-line"></div>
        {/* footer bottom */}
        <div className="footer-bottom flex-row bg-body p-3">
          <p className="text-center m-0">
            &copy; 2024 Airbnb. All Rights Reserved.
          </p>
          <div className="text-center m-0">
            <p>
              Designed by <a href="#">Your Name</a>
            </p>
            <p>
              Developed by <a href="#">Your Name</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
