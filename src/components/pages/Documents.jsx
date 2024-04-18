import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import LogedInNav from "../LogedInNav";
import { Container } from "react-bootstrap";

function Documents() {
  const [activePage, setActivePage] = React.useState("documents");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation here
    // Submit request to backend or perform necessary actions
    // Display confirmation message
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
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Documents;
