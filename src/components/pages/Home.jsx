import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUtensils,
  faTshirt,
  faBroom,
  faComments,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import "./css/home.css";
import Footer from "../Footer";

function Home() {
  return (
    <Container className="mt-5">
      <h1>Welcome to Waterfront Air bnb Errands!</h1>
      <p>
        Need help with errands during your stay at Waterfront Air bnb? You're in
        the right place! Our platform makes it easy to request errand services
        and track your requests.
      </p>
      <h2>Services We Offer</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <ServiceCard
          icon={faShoppingCart}
          title="Grocery Shopping"
          description="Get your groceries delivered right to your doorstep."
          link="/request"
          variant="primary"
        />
        <ServiceCard
          icon={faUtensils}
          title="Food Delivery"
          description="Order delicious meals from local restaurants and have them delivered."
          link="/request"
          variant="success"
        />
        <ServiceCard
          icon={faTshirt}
          title="Laundry Services"
          description="Schedule laundry pickup and delivery services for your convenience."
          link="/request"
          variant="warning"
        />
        <ServiceCard
          icon={faBroom}
          title="Housekeeping"
          description="Keep your accommodation clean and tidy with professional housekeeping services."
          link="/request"
          variant="info"
        />
        <ServiceCard
          icon={faComments}
          title="Concierge Assistance"
          description="Need recommendations or assistance? Chat with our friendly concierge."
          link="/"
          variant="secondary"
        />
        <ServiceCard
          icon={faTools}
          title="Maintenance Requests"
          description="Report any maintenance issues or requests directly through our platform."
          link="/request"
          variant="dark"
        />
      </Row>
      <p className=" mt-4">
        Feel free to request any of the available services above. If you have
        any questions or need assistance, please don't hesitate to{" "}
        <Link to="/contact">contact us</Link>.
      </p>
      <Footer />
    </Container>
  );
}

const ServiceCard = ({ icon, title, description, link, variant }) => {
  return (
    <Col>
      <Card className="h-100 ServiceCard">
        <Card.Body>
          <div className="text-center mb-3">
            <FontAwesomeIcon icon={icon} className="display-4" />
          </div>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="text-center">
            <Link to={link}>
              <Button variant={variant}>Request Service</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Home;
