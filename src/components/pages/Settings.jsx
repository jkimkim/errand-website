import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import LogedInNav from "../LogedInNav";
import { db } from "../../firebase"; // Import Firestore from Firebase
import Footer from "../Footer";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    // Set submitting state to true
    setSubmitting(true);
    try {
      // Send message to Firestore
      await db.collection("contacts").add({
        name,
        email,
        message,
        timestamp: new Date(),
      });
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      // Set submitted state to true
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      // Set submitting state back to false
      setSubmitting(false);
    }
  };

  return (
    <div
      className="d-flex flex-row justify-between "
      style={{ minHeight: "100vh" }}
    >
      <LogedInNav />
      <Container className=" mt-4">
        <h1>Contact Us</h1>
        {submitted ? (
          <p>Thank you for your message! We'll be in touch soon.</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={submitting}
              className="mt-3 mb-3"
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
        <Footer />
      </Container>
    </div>
  );
};

export default ContactPage;
