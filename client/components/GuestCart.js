import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUpdate } from "../slices/cartSlice";
const axios = require("axios");

let total = 0;
let totalPrice = 0;
const GuestCart = () => {
  const cart = useSelector((state) => state.cart.guestCart);
  const dispatch = useDispatch();

  const totalItems = async (data) => {
    for (let i = 0; i < data.length; i++) {
      total += data[i].quantity;
      totalPrice += data[i].price * data[i].quantity;
    }
  };

  useEffect(() => {
    total = 0;
    totalPrice = 0;
    const blah = async () => {
      const { data } = await axios.get("/auth/guestCart");
      dispatch(cartUpdate(data));
      totalItems(data);
    };
    blah();
  }, []);

  const handleRemove = async (poke) => {
    const id = Number(poke.id);
    await axios.delete(`/auth/guestCart/${id}`);
    const { data } = await axios.get("/auth/guestCart");
    dispatch(cartUpdate(data));
    total = 0;
    totalPrice = 0;
    totalItems(data);
  };

  return (
    <div>
      <div>
        {cart.length > 0 ? (
          <div>
            <h1>Cart</h1>
            <h3>{`Total Price: ${totalPrice} Total Items: ${total}`}</h3>
            <ul>
              {cart.map((pokemon) => {
                return (
                  <li key={pokemon.id}>
                    <h4>{pokemon.name}</h4>
                    <p></p>
                    <p>
                      Price: ${pokemon.price * pokemon.quantity} Quantity:
                      {pokemon.quantity}
                    </p>
                    <img className="pokemonImg" src={pokemon.imageUrl}></img>
                    <div>
                      <button onClick={() => handleRemove(pokemon)}>
                        Remove from cart
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>Nothing in cart</div>
        )}
      </div>
    </div>
  );
};

export default GuestCart;
