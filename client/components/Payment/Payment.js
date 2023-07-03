const React = require("react");
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CheckedOut from "./CheckedOut";
import { useLocation } from "react-router-dom";
import ProductInList from "./ProductInList";
import { useDispatch } from "react-redux";
import { checkoutCart, getAllCart } from "../../slices/cartSlice";

const PaymentSite = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const [cardnumber, setCardNumber] = useState();
  const [date, setDate] = useState();
  const [cvv, setCVV] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [selected, isSelected] = useState();
  const [checkedOut, setCheckedOut] = useState(false);

  const location = useLocation();
  const cart = location.state.cart;
  const rawPrice = location.state.totalPrice;
  const price = rawPrice.toFixed(2);

  const dispatch = useDispatch();

  useEffect(() => {
    const getName = async () => {
      const { data } = await axios.get("/api/users/user");
      setName(data.name);
    };
    setFullName(fullName || "");
    setCardNumber(cardnumber || "");
    setDate(date || "");
    setCVV(cvv || "");
    getName();
  }, [checkedOut]);

  const handleSelect1 = async (e) => {
    e.preventDefault();
    setFullName(name);
    setCardNumber("**** **** **** 4358");
    setDate("10/24");
    setCVV("***");
  };
  const handleSelect2 = async (e) => {
    e.preventDefault();
    setFullName(name);
    setCardNumber("**** **** **** 2777");
    setDate("11/26");
    setCVV("***");
  };
  const handleSelect3 = async (e) => {
    e.preventDefault();
    setFullName(name);
    setCardNumber("**** **** **** 9599");
    setDate("03/24");
    setCVV("***");
  };

  const handleNewCard = async (e) => {
    setFullName("");
    setCardNumber("");
    setDate("");
    setCVV("");
  };

  const getCheckoutDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const date = today.toDateString();
    return date;
  };
  const checkoutDate = getCheckoutDate();

  const handleCheckout = async (e) => {
    e.preventDefault();
    await dispatch(checkoutCart({ checkoutDate, price }));
    await dispatch(getAllCart());
    setCheckedOut(true);
  };

  return !checkedOut ? (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="img-box">
                <img
                  className="pokemonImg"
                  src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                  alt=""
                />
              </div>
              <div class="number">
                <label class="fw-bold" for="">
                  **** **** **** 4358
                </label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <small>
                  <span class="fw-bold">Expiry date:</span>
                  <span>10/24</span>
                </small>
                <small>
                  <span class="fw-bold">Name:</span>
                  <span>{name}</span>
                </small>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    onClick={handleSelect1}
                  />
                  <small>
                    <label class="form-check-label" for="check2">
                      Select Payment Method
                    </label>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="img-box">
                <img
                  className="pokemonImg"
                  src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                  alt=""
                />
              </div>
              <div class="number">
                <label class="fw-bold">**** **** **** 2777</label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <small>
                  <span class="fw-bold">Expiry date:</span>
                  <span>11/26</span>
                </small>
                <small>
                  <span class="fw-bold">Name:</span>
                  <span>{name}</span>
                </small>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    onClick={handleSelect2}
                  />
                  <small>
                    <label class="form-check-label" for="check2">
                      Select Payment Method
                    </label>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="img-box">
                <img
                  className="pokemonImg"
                  src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                  alt=""
                />
              </div>
              <div class="number">
                <label class="fw-bold">**** **** **** 9599</label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <small>
                  <span class="fw-bold">Expiry date:</span>
                  <span>03/24</span>
                </small>
                <small>
                  <span class="fw-bold">Name:</span>
                  <span>{name}</span>
                </small>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    onClick={handleSelect3}
                  />
                  <small>
                    <label class="form-check-label" for="check2">
                      Select Payment Method
                    </label>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="add-card">
                <span class="fw-bold"> New Card </span>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    onClick={handleNewCard}
                  />
                  <small>
                    <label class="form-check-label" for="flexCheckChecked">
                      Enter New Payment Method
                    </label>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mt-4">
            <div class="card p-3">
              <p class="mb-0 fw-bold h4">Payment Methods</p>
            </div>
          </div>
          <div class="col-12">
            <div class="card p-3">
              <div class="card-body border p-0">
                <p>
                  <a
                    class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    role="button"
                    aria-expanded="true"
                  >
                    <span class="fw-bold">Credit Card</span>
                  </a>
                </p>
                <div class="collapse show p-3 pt-0">
                  <div class="row">
                    <div class="col-lg-5 mb-lg-0 mb-3">
                      <p class="h4 mb-0">Summary</p>

                      <p class="mb-0">
                        <span class="fw-bold">Total Price: $</span>
                        <span class="c-green"> {price}</span>
                      </p>
                      <p class="mb-0">
                        <span class="fw-bold">Products:</span>
                        <span class="c-green"></span>
                      </p>
                      <p class="mb-0">
                        {cart.map((product) => {
                          return (
                            <ProductInList key={product.id} product={product} />
                          );
                        })}
                      </p>
                    </div>
                    <div class="col-lg-7">
                      <form action="" class="form">
                        <div class="row">
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                              />
                              <label for="" class="form__label">
                                Full Name
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={cardnumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                              />
                              <label for="" class="form__label">
                                Card Number
                              </label>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                              />
                              <label for="" class="form__label">
                                MM/YYYY
                              </label>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form__div">
                              <input
                                type="password"
                                class="form-control"
                                value={cvv}
                                onChange={(e) => setCVV(e.target.value)}
                              />
                              <label for="" class="form__label">
                                CVV Code
                              </label>
                            </div>
                          </div>
                          <div class="col-12"> </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card p-3">
              <div class="card-body border p-0">
                <p>
                  <a
                    class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    role="button"
                    aria-expanded="true"
                  >
                    <span class="fw-bold">Shipping Address</span>
                  </a>
                </p>
                <div class="collapse show p-3 pt-0">
                  <div class="row">
                    <div class="col-lg-5 mb-lg-0 mb-3">
                      <p class="h4 mb-0">Shipping Address</p>
                    </div>
                    <div class="col-lg-7">
                      <form action="" class="form">
                        <div class="row">
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={fullName}
                              />
                              <label for="" class="form__label">
                                Full Name
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={shippingAddress}
                              />
                              <label for="" class="form__label">
                                Shipping Address
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={country}
                              />
                              <label for="" class="form__label">
                                Country{" "}
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                value={phone}
                              />
                              <label for="" class="form__label">
                                Cell Phone{" "}
                              </label>
                            </div>
                          </div>
                          <div class="col-12"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="btn btn-primary payment">
              <Button variant="primary" onClick={handleCheckout}>
                Checkout Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <CheckedOut />
  );
};
export default PaymentSite;
