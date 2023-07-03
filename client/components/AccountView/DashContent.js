import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { fetchSingleUser } from "../../slices/userSlice";

const DashContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  return (
    <>
      <div className="dash-content">
        <h1>Welcome, {user.username}!</h1>
        <div className="w-100" style={{ maxWidth: "20rem" }}>
          <Card className="dash-card">
            <Card.Body className="dash-card">
              <Link to="/dashboard/users">Manage Users</Link>
            </Card.Body>
          </Card>
          <br />
          <Card className="dash-card">
            <Card.Body className="dash-card">
              <Link to="/dashboard/products">Manage Products</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashContent;
