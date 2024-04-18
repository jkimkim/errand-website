import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faXmark,
  faSliders,
  faFile,
  faSearch,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./css/LoggedInNav.css";
import { getUser, signOutUser } from "../Context/firebaseMethids";
import { useNavigate } from "react-router-dom";

import logo from "../img/docs-logo.png";

function LoggedInNav() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(
    "https://jkimtech.web.app/c13d4e8b3f9cbfbf19fb.svg"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = getUser(); // Fetch user data from your authentication system
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio || "");
    };

    fetchUserData();
  }, []);

  // Sign out user
  const handleSignOut = async () => {
    try {
      await signOutUser();
      alert("User signed out successfully!");
      // Redirect user to logged out stack
      navigate("/Home");
      // Clear user from local storage
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error signing out user:", error);
      alert("Failed to sign out user. Please try again later.");
    }
  };

  return (
    <div
      className="side-nav flex flex-col flex-shrink-0 p-3 bg-light sticky-top"
      style={{ width: "250px" }}
    >
      <NavLink
        exact
        to="/"
        className="flex items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none flex-row"
        activeClassName="active"
      >
        <img
          src={logo}
          alt="logo"
          width="32"
          height="32"
          className="rounded-full me-2"
        />
        <span className="text-xl font-semibold">
          <strong>Air bnb Errands</strong>
        </span>
      </NavLink>
      <hr className="my-2" />
      <div className="relative mb-2 flex flex-row">
        <input
          type="text"
          className="form-input w-full pl-10 pr-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-800 "
          placeholder="Search"
          aria-label="Search"
          style={{
            width: "100%",
            height: "40px",
            color: "#495057",
            padding: "10px",
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute top-0 left-0 m-3 text-gray-400"
          style={{
            fontSize: "1.5rem",
            color: "#495057",
          }}
        />
      </div>
      <h5 className="text-start mt-2 mb-1">Explore</h5>
      <hr className="my-2" />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link btn-dark"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faHouse} className="me-2" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/request" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faFile} className="me-2" />
            Request
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faSliders} className="me-2" />
            Contact Us
          </NavLink>
        </li>
      </ul>
      <hr className="my-2" />
      <div className="dropdown">
        <button
          className="flex items-center btn btn-dark dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={image}
            alt=""
            width="32"
            height="32"
            className="rounded-full me-2"
          />
          <strong>{name}</strong>
        </button>
        <ul
          className="dropdown-menu shadow"
          aria-labelledby="dropdownMenuButton"
        >
          <li>
            <NavLink to="/" className="dropdown-item" activeClassName="active">
              Order Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="dropdown-item"
              activeClassName="active"
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="dropdown-item"
              activeClassName="active"
            >
              Profile
            </NavLink>
          </li>
          <hr className="dropdown-divider" />
          <li>
            <NavLink
              className="dropdown-item"
              activeClassName="active"
              onClick={handleSignOut}
            >
              Sign out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoggedInNav;
