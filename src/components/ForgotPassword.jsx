import React, { useState, useRef } from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import logo from "../img/docs-logo.png";

function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await sendPasswordResetEmail(auth, emailRef.current.value);
      alert("Password reset email sent!");
      setLoading(false);
      {
        /* remove the modal after login */
      }

      const modal = document.getElementById("forgotPasswordModal");
      const backdrop = document.querySelector(".modal-backdrop");
      modal.classList.remove("show");
      backdrop.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("aria-hidden", "true");
      backdrop.parentNode.removeChild(backdrop);

      {
        /* restore scroll bar */
      }
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    } catch (error) {
      setError(error.message); // Display specific error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-modal modal fade"
      id="forgotPasswordModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="wrapper modal-content">
          <div className="logo-holder">
            <img src={logo} alt="" />
          </div>
          <div className="text-center mt-4 name">Errands</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <form className="p-3 mt-3" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="btn btn-dark mt-3"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
