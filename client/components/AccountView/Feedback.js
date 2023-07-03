const React = require("react");
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addFeedback } from "../../slices/feedbackslice";
import { Card, Form, Button, Alert } from "react-bootstrap";


const Feedback = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setName('');
        setFeedback('');
        await dispatch(addFeedback({ name, feedback }))
    }

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Feedback Form</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="name">
                                <Form.Label>Full Name </Form.Label>
                                <Form.Control
                                    input name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group id="feedback">
                                <Form.Label>Please Write Your Feedback Here </Form.Label>
                                <Form.Control
                                    type="feedback"
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    required
                                ></Form.Control>
                            </Form.Group>
                            <Button className="w-100" onClick={handleSubmit}>
                                Submit Feedback
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
};
export default Feedback;