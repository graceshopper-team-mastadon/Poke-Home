import React, { useEffect, useState } from "react";
import {
  FormGroup,
  FormControl,
  Button,
  Form,
  Navbar,
  Nav,
  NavLink,
  Container,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authTrue, authFalse } from "../slices/authSlice";
import { searchProduct } from "../slices/productsSlice";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSearch } from "react-icons/bs";

const PokeHome = () => {
  const navigate = useNavigate();
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
  };
  const tinyPokeLogo = {
    width: "10%",
    height: "10%",
  };
  const offCanvasStyle = {
    color: "Black",
    margin: "1rem",
    textDecoration: "none",
  };
  const [searchOptions, setSearchOptions] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const loggedInStatus = async () => {
      const status = await axios.get("/auth/verify");
      if (status.data) {
        dispatch(authTrue());
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        dispatch(authFalse());
      }
    };
    const adminStatus = async () => {
      const { data } = await axios.get("/api/users/checkadmin");
      setIsAdmin(data);
    };
    loggedInStatus();
    adminStatus();
  }, [auth]);

  const formSubmit = async (e) => {
    e.preventDefault();
    await dispatch(searchProduct(searchOptions));
    setSearchOptions("");
    navigate("/search");
  };

  return (
    <div className="bg">
      <div className="abovecontainer">
        <div className="aboveBar">
          <div>
            <a href="/" className="logotext">
              PokeHome
            </a>
          </div>
          <div>
            <Form className="aboveBarContent search" onSubmit={formSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={searchOptions}
                  onChange={(e) => setSearchOptions(e.target.value)}
                />
              </FormGroup>
              <button type="submit" class="homebutton gradient">
                <BsSearch />
              </button>
            </Form>
          </div>

          <div>
            <Link to="/products" className="abovebar-content">
              All
            </Link>
          </div>
          <div>
            <NavDropdown title="Pokemon" className="abovebar-content">
              <NavDropdown.Item className="dropdown-item">
                <Link to="/category/pokemon-all">All Pokemon</Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => navigate("/products/GenI")}
              >
                Generation I
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => navigate("/products/GenII")}
              >
                Generation II
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => navigate("/products/GenIII")}
              >
                Generation III
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => navigate("/products/GenIV")}
              >
                Generation IV
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => navigate("/products/GenV")}
              >
                Generation V
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <div>
            <Link to="/category/pokeballs" className="abovebar-content">
              Pokeballs
            </Link>
          </div>
          <div>
            <Link to="/category/potions" className="abovebar-content">
              Potions
            </Link>
          </div>

          <div>
            <Link className="abovebar-content" to="/cart">
              Cart
            </Link>
          </div>

          {!loggedIn ? (
            <div>
              <Link className="abovebar-content" to="/login">
                <button type="button" class="homebutton">
                  {" "}
                  Login{" "}
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link className="offcanvas-content" onClick={handleShow}>
                Account
              </Link>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvas-title">
                    Account
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup style={offCanvasStyle}>
                    <ListGroup.Item>
                      <Link to="/profile" style={offCanvasStyle}>
                        Profile{" "}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/order-history" style={offCanvasStyle}>
                        Order History{" "}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/payment-cards" style={offCanvasStyle}>
                        Payment Cards
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/feedback" style={offCanvasStyle}>
                        Send us Feedback
                      </Link>
                    </ListGroup.Item>
                    {isAdmin && (
                      <>
                        <ListGroup.Item>
                          <Link to="/dashboard" style={offCanvasStyle}>
                            Dashboard
                          </Link>
                        </ListGroup.Item>
                      </>
                    )}
                    <ListGroup.Item>
                      <Link to="/signout" style={offCanvasStyle}>
                        Sign Out
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PokeHome;
