import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addProduct } from "../../slices/productsSlice";

const AddPokeball = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //   const [category, setCategory] = useState("");
  const [inventory, setInventory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const category = "pokeballs";

  const [added, setAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      addProduct({
        name,
        description,
        category,
        inventory,
        imageUrl,
        price,
      })
    );
    setAdded(true);
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setCategory("");
    setInventory("");
    setImageUrl("");
    setPrice("");
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
              <Card.Title>Add Pokemon</Card.Title>
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
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={category}
                    disabled
                    readOnly
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Inventory</Form.Label>
                  <Form.Control
                    type="number"
                    value={inventory}
                    onChange={(e) => setInventory(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>imageUrl</Form.Label>
                  <Form.Control
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <div className="mb-2">
                  <Button variant="success" type="submit">
                    Create Product
                  </Button>
                  <Button variant="secondary" onClick={clearForm}>
                    Reset Form
                  </Button>
                </div>
              </Form>
            </Card.Body>
          ) : (
            <Card.Body>
              <Card.Text>Success! New Pokeball is listed for sale!</Card.Text>
            </Card.Body>
          )}
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Link to="/dashboard/products">Back to All Products</Link>
          </Card.Body>
          <Card.Body>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddPokeball;
