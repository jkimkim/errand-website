import React, { useRef, useState } from "react";
import "./css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useAuth } from "../Context/AuthContext";
import logo from "../img/docs-logo.png";
import { auth } from "../firebase";
import { addDoc } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser } = useAuth(); // Use currentUser provided by useAuth
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      const user = userCredential.user;

      const userRef = collection(db, "Users");
      const userData = {
        email: emailRef.current.value,
        name: nameRef.current.value,
        role: "user",
        uid: user.uid,
      };
      await setDoc(doc(userRef, user.uid), userData);

      console.log("User added to Firestore");
    } catch (error) {
      setError("Failed to create an account");
      console.error(error);
    }

    setLoading(false);

    // save user to local storage
    const user = {
      email: emailRef.current.value,
      name: nameRef.current.value,
    };
    localStorage.setItem("user", JSON.stringify(user));

    // remove the modal after login
    const modal = document.getElementById("signupModal");
    const backdrop = document.querySelector(".modal-backdrop");
    modal.classList.remove("show");
    modal.style.display = "none";
    backdrop.remove();
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";

    navigate("/");
  }

  async function addUserToFirestore(email, name, user) {
    if (!user) {
      console.error("No user logged in, cannot add data to Firestore");
      return;
    }

    const userRef = db.collection("users").doc(user.uid);

    await userRef.set({
      email: email,
      name: name,
      role: "user",
    });

    console.log("User added to Firestore");
  }

  return (
    <React.Fragment>
      <div
        className="login-modal modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="wrapper modal-content">
            <div className="logo-holder">
              <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">DocsLib</div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="p-3 mt-3" onSubmit={handleSubmit}>
              <div className="form-field d-flex align-items-center">
                <span className="fa fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required="required"
                  ref={nameRef}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fa fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required="required"
                  ref={emailRef}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key">
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                  required="required"
                  ref={passwordRef}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key">
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <input
                  type="password"
                  name="confirm password"
                  id="conPwd"
                  placeholder="confirm Password"
                  required="required"
                  ref={confirmPasswordRef}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark mt-3"
                disabled={loading}
              >
                Signup
              </button>
            </form>
            <div className="text-center fs-6">
              OR
              <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                {" "}
                Log In{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
