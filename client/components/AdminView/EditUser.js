import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { editUser } from "../../slices/userSlice";
import { deleteSingleUser } from "../../slices/userSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = location.state.item;
  const [userExists, setUserExists] = useState(user);
  const id = user.id;

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [role, setRole] = useState(user.role);

  const [edited, setEdited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = user.id;
    await dispatch(editUser({ id, name, username, email, address, role }));
    setEdited(true);
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteSingleUser(id));
    setUserExists(false);
  };
  const cancelEdits = () => {
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setAddress(user.address);
    setRole(user.role);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          {userExists && !edited && (
            <Card.Body>
              <Card.Title>Edit User</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
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
                    type="address"
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
                    Confirm Edits
                  </Button>
                  <Button variant="secondary" onClick={cancelEdits}>
                    Cancel Edits
                  </Button>
                  <Button variant="danger" onClick={() => deleteHandler(id)}>
                    Delete User
                  </Button>
                </div>
              </Form>
            </Card.Body>
          )}
          {!userExists && (
            <Card.Body>
              <Card.Text>This user has been deleted</Card.Text>
            </Card.Body>
          )}
          {edited && (
            <Card.Body>
              <Card.Text>{`Success! User ${user.username} has been edited.`}</Card.Text>
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

export default EditUser;
