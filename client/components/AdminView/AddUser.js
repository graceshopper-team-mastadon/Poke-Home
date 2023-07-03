import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addUser } from "../../slices/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const password = "DefaultPassword";

  const [added, setAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addUser({ name, username, password, email, address, role }));
    setAdded(true);
  };

  const clearForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setAddress("");
    setRole("");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          {!added ? (
            <Card.Body>
              <Card.Title>Edit User</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    value={password}
                    disabled
                    readOnly
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Select below</option>
                    <option value="MEMBER">Member</option>
                    <option value="ADMIN">Admin</option>
                  </Form.Select>
                </Form.Group>
                <div className="mb-2">
                  <Button variant="success" type="submit">
                    Create User
                  </Button>
                  <Button variant="secondary" onClick={clearForm}>
                    Reset Form
                  </Button>
                </div>
              </Form>
            </Card.Body>
          ) : (
            <Card.Body>
              <Card.Text>Success! New user has been created.</Card.Text>
            </Card.Body>
          )}
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Link to="/dashboard/users">Back to All Users</Link>
          </Card.Body>
          <Card.Body>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddUser;
