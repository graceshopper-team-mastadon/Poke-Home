import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../slices/productsSlice";
import Pagination from "../Pagination";
import TableDropdown from "../Dropdown";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Products);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Get current posts
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItems, indexOfLastItems);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="productTable">
      <h3>Manage Products</h3>
      <Card>
        <Card.Body>
          <Link to="/dashboard/products/add/pokemon">
            <Button variant="success">Add Pokemon</Button>
          </Link>
          <Link to="/dashboard/products/add/potion">
            <Button variant="success">Add Potion</Button>
          </Link>
          <Link to="/dashboard/products/add/pokeball">
            <Button variant="success">Add Pokeball</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h5>Current Products</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Inventory</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                currentItems.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.inventory}</td>
                    <td>{product.price}</td>
                    <td>{<TableDropdown item={product} />}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            paginate={paginate}
          />
          <Link to="/dashboard">Back to Dashboard</Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductTable;
