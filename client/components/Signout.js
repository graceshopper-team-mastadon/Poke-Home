import React, { useState } from "react";
const axios = require("axios");
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authFalse } from '../slices/authSlice'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const signOut = async (e) => {
        e.preventDefault();
        await axios.get('/auth/logout')
        dispatch(authFalse())
        navigate('/');
    }

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Out</h2>
                        <Form onSubmit={signOut} >
                            <Form.Group id="signout">
                                <Form.Label>Are you sure you want to sign out?</Form.Label>
                            </Form.Group>
                            <Button className="w-100" type="submit">
                                Sign Out
                            </Button><br></br>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
