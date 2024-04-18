import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/introcard.scss";

class IntroSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-6" id="intro">
          <div className="row">
            <div className="col-md-12">
              {/* // This is the intro section card with text, an image and a signup button */}
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="card-title fw-bold">
                        Welcome to Waterfront Air bnb Errands!
                      </h1>
                      <p className="card-text">
                        Need help with errands during your stay at Waterfront
                        Air bnb? You're in the right place! Our platform makes
                        it easy to request errand services and track your
                        requests.
                      </p>
                      <p className="card-text">
                        Whether you're a host looking to elevate your guest's
                        stay or a guest seeking personalized assistance during
                        your trip, we're here to make every moment memorable.
                        Sit back, relax, and let us take care of the errands, so
                        you can focus on creating unforgettable memories.
                      </p>
                      <p className="card-text">
                        To get started, click the button below to sign up for
                        free.
                      </p>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        className="btn btn-dark signup"
                        role="button"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="https://americareinfo.com/wp-content/uploads/2022/01/ameriCARE_RunningErrands_Illustration.png"
                        className="img-fluid items-center"
                        alt="Responsive image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IntroSection;
