import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
const axios = require("axios");
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("./auth/signup", {
      username: username,
      password: password,
      email: email,
      address: address,
      name: name,
    });
    setUsername("");
    setPassword("");
    setEmail("");
    setAddress("");
    setName("");
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
