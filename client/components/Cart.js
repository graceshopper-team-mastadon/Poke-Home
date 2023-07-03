import React, { useEffect } from "react";
import GuestCart from "./GuestCart";
import { useSelector, useDispatch } from "react-redux";
import { Table, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllCart } from "../slices/cartSlice";
import { getAllProducts } from "../slices/productsSlice";
import { deleteSingleItem } from "../slices/cartSlice";
import { incrementItemCount } from "../slices/cartSlice";
import { decrementItemCount } from "../slices/cartSlice";
import { List } from "react-admin";

const Cart = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.Products);

  useEffect(() => {
    dispatch(getAllCart());
    dispatch(getAllProducts());
  }, []);

  if (logged === false) {
    return <GuestCart />;
  } else {
    const singleProduct = cart.map((element) => {
      return products.filter((elem) => elem.id === element.productId);
    });
    const checkIfLoaded = () => {
      for (let i = 0; i < cart.length; i++) {
        if (singleProduct[i].length === 0) return true;
      }
      return false;
    };

    if (cart.length === 0 || checkIfLoaded()) {
      return (
        <div className="cart-screen">
          <div className="cart-text">
            <h1>Oops, looks like your cart is empty. To browse pokemon click: </h1>
            <Link to={"/products"} className="here">here</Link>
          </div>
          <img class="pokemon-1" src="/pikachu.gif" alt="pokemon" />
        </div>

      );
    }

    const handleRemove = async (id) => {
      await dispatch(deleteSingleItem(id));
    };

    const handleIncrement = async (id) => {
      await dispatch(incrementItemCount(id));
    };

    const handleDecrement = async (id) => {
      await dispatch(decrementItemCount(id));
    };

    const calculatePrice = () => {
      let totalPrice = 0;
      singleProduct.map((item, index) => {
        totalPrice += item[0].price * cart[index].count;
      });
      return totalPrice;
    };
    const totalPrice = calculatePrice();

    const calculateTotalItems = () => {
      let totalItems = 0;

      cart.map((elem) => {
        totalItems += elem.count;
      });

      return totalItems;
    };
    return (
      <div class="container flex-column p-2">
        <h2>Cart</h2>
        <div class="p-2">
          <h5>
            Total: ${totalPrice}, Total Items: {calculateTotalItems()}
          </h5>

          <ListGroup>
            {singleProduct.map((pokemon, index) => {
              return (
                <div class="container flex-column p-2">
                  <ListGroup.Item key={pokemon[0].id}>
                    <h4>
                      <Link to={`/products/${pokemon[0].id}`}>
                        {pokemon[0].name}
                      </Link>
                    </h4>
                    <p></p>
                    <p>Qty: {cart[index].count}</p>
                    <p>SubTotal: ${pokemon[0].price * cart[index].count}</p>
                    <Card.Body>
                      <img
                        className="pokemonImg"
                        src={pokemon[0].imageUrl}
                      ></img>
                    </Card.Body>
                    <div>
                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() => handleIncrement(pokemon[0].id)}
                      >
                        Add One
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() => handleDecrement(pokemon[0].id)}
                      >
                        Remove One
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() => handleRemove(pokemon[0].id)}
                      >
                        Remove From Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                </div>
              );
            })}
          </ListGroup>

          <div>
            <Link to="/payment" state={{ cart: cart, totalPrice: totalPrice }}>
              <Button size="sm" variant="success">
                Checkout!
              </Button>
            </Link>
          </div>
        </div>
        {/* </Card> */}
      </div>
    );
  }
};

export default Cart;
