import React, { useState } from "react";
const axios = require("axios");
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QuickAddToCart } from "../slices/cartSlice";
import { authTrue } from "../slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("./auth/login", {
      username: username,
      password: password,
    });
    if (await axios.get("/auth/verify")) {
      const {data} = await axios.get("/auth/guestCart")
     for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].quantity; j++) {
      await dispatch(QuickAddToCart(data[i]))
      }
     }
      await axios.delete('/auth/guestCartCookie')
      dispatch(authTrue())
      navigate("/");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={handleSubmit}>
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
              <Button className="w-100" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
