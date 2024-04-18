import * as React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/top-nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faShoppingCart,
  faTasks,
  faBoxes,
  // cleaning icon
  faBroom,
} from "@fortawesome/free-solid-svg-icons";

class CategoriesCard extends Component {
  state = {
    categories: [
      {
        id: 1,
        title: "Housekeeping",
        description:
          "Professional cleaning and tidying services for your Airbnb",
        icon: faBroom,
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
      },
      {
        id: 2,
        title: "Food Delivery",
        description: "Get your favorite meals delivered to your doorstep",
        icon: faUtensils,
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
      },
      {
        id: 3,
        title: "Grocery Shopping",
        description: "Have your groceries picked up and delivered to you",
        icon: faShoppingCart,
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
      },
      {
        id: 4,
        title: "Task Assistance",
        description: "Get help with various tasks and errands",
        icon: faTasks,
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
      },
      {
        id: 5,
        title: "Moving Assistance",
        description: "Assistance with packing, moving, and unpacking",
        icon: faBoxes,
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
      },
      {
        id: 6,
        title: "Other Errands",
        description: "Any other errands you need assistance with",
        icon: faHome,
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4" id="categories">
          <h1 className="text-center categories-bg">Categories</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="card color-body">
                <div className="card-body">
                  <div className="row">
                    {this.state.categories.map((category) => (
                      <div className="col-md-4 mb-3" key={category.id}>
                        <div className="card category-card">
                          <div className="card-body">
                            <img
                              src={category.image}
                              className="img-fluid category-img"
                              alt="Responsive image"
                            />
                            <h5 className="card-title fw-bold">
                              {category.title}
                            </h5>
                            <p className="card-text ">{category.description}</p>
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

        <section className="categories bg-light">
          <div className="container categories__container">
            <div className="categories__left">
              <h1>Categories</h1>
              <p>
                Choose from a variety of categories to find the service that
                best suits your needs and preferences.
              </p>
              {/* <!-- <a href="#" className="btn">Visit</a> --> */}
            </div>
            <div className="categories__right">
              {this.state.categories.map((category) => (
                <article className="category card" key={category.id}>
                  <div className="category__icons-div">
                    <span className="category__icon">
                      <FontAwesomeIcon
                        className="category__fa-icon"
                        icon={category.icon}
                      />
                    </span>
                  </div>
                  <div className="category__info">
                    <h5>{category.title}</h5>
                    <p>{category.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CategoriesCard;
