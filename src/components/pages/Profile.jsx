import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { getUser, updateUserProfile } from "../../Context/firebaseMethids";
import LogedInNav from "../LogedInNav";
import "./css/home.css";

function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = getUser(); // Fetch user data from your authentication system
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio || ""); // Assuming bio is part of the user object
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Update user profile in the backend
      await updateUserProfile({ name, email, bio });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div
      className="d-flex flex-row justify-between"
      style={{ minHeight: "100vh" }}
    >
      <LogedInNav />
      <Container>
        <h2 className="mt-4">Profile</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="button"
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ProfilePage;
