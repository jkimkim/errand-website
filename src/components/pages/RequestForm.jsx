import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import LogedInNav from "../LogedInNav";
import { db } from "../../firebase"; // Import Firestore from Firebase
import { submitRequest, getUser } from "../../Context/firebaseMethids";
import { Modal } from "react-bootstrap";

function RequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [notes, setNotes] = useState("");
  const [activePage, setActivePage] = useState("request");
  const [showModal, setshowmodal] = useState(false);

  useEffect(() => {
    // Fetch user data asynchronously
    const fetchData = async () => {
      const user = getUser();
      setName(user.name);
      setEmail(user.email);
      console.log(user.email);
    };

    fetchData();
  }, []); // Run only once after the component mounts

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form validation here
    // Submit request to backend or perform necessary actions
    // Display confirmation message
    const request = {
      name,
      email,
      serviceType,
      notes,
    };
    await submitRequest(db, request);
    setServiceType("");
    setNotes("");
  };

  return (
    <div
      className="d-flex flex-row justify-between "
      style={{ minHeight: "100vh" }}
    >
      <LogedInNav setActivePage={setActivePage} />
      {/* body */}
      <Container className="d-flex flex-column">
        <div>
          <h2>Request Service</h2>
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
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                as="select"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="">Select Service Type</option>
                <option value="Grocery Shopping">Grocery Shopping</option>
                <option value="Food Delivery">Food Delivery</option>
                <option value="Laundry Services">Laundry Services</option>
                <option value="Housekeeping">Housekeeping</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="notes">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Enter any additional notes"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default RequestForm;
