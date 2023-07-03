const React = require("react");
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const CheckedOut = () => {
  const navigate = useNavigate();

  const random = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);

  const returnHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Card>
      <Card.Body>
        <Card.Text>Congrats you've been checked out!</Card.Text>
        <Card.Text>Thank you for supporting PokeHome Sanctuary.</Card.Text>
        <Card.Text>Your order number is: {random}</Card.Text>
        <Button variant="primary" onClick={returnHome}>
          Return Home
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CheckedOut;
