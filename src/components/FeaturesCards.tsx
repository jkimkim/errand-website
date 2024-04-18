import * as React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/introcard.scss";

class FeaturesCard extends Component {
  state = {
    features: [
      {
        id: 1,
        title: "Request Errands",
        description: "Request Errands easily",
        image:
          "https://moolah.co.ke/wp-content/uploads/2020/11/Moolah-1920x900px-errands-guy-1-1-960x540.jpg",
      },
      {
        id: 2,
        title: "Track Errands",
        description: "Track Errands easily",
        image:
          "https://moolah.co.ke/wp-content/uploads/2020/11/Moolah-1920x900px-errands-guy-1-1-960x540.jpg",
      },
      {
        id: 3,
        title: "Manage errands",
        description: "Manage errands at your fingertips",
        image:
          "https://moolah.co.ke/wp-content/uploads/2020/11/Moolah-1920x900px-errands-guy-1-1-960x540.jpg",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4" id="features">
          <h1 className="text-center categories-bg">Features</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="card color-body">
                <div className="card-body">
                  <div className="row">
                    {this.state.features.map((feature) => (
                      <div className="col-md-4" key={feature.id}>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title fw-bold">
                              {feature.title}
                            </h5>
                            <p className="card-text">{feature.description}</p>
                            <img
                              src={feature.image}
                              className="img-fluid"
                              alt="Responsive image"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
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

export default FeaturesCard;
