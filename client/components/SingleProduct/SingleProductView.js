import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  selectSingleProduct,
} from "../../slices/singleProductSlice";
import { AddToCart } from "../../slices/cartSlice";
const axios = require("axios");
import CategoryBar from "../CategoryBar";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const singleProduct = useSelector(selectSingleProduct);

  const [optionValue, setOptionValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("")

  useEffect(() => {
    dispatch(fetchProduct(id));

    // fetch(`https://pokeapi.co/api/v2/pokemon/${singleProductApi}`).then((res)=>res.json()).then((data)=> {
    //   if (data.flavor_text){setDescription(data.)}
    // })

  }, [dispatch, id]);

  const addHandler = async (singleProduct, quantity) => {
    await axios.get("/api/cart");
    await dispatch(AddToCart({ singleProduct, quantity }));
  };

  return (
    <>
      <CategoryBar category={`${singleProduct.name}`} generation={`${singleProduct.generation}`} />
      <section className="single-product">
        <div className="left-side">
          <div className="pokemon-photo">
            <img className="product-picture" src={`${singleProduct.imageUrl}`} />
          </div>
          <div className="pokemon-description">
            {/* This is where the description will go. */}
          </div>
        </div>
        <div className="right-side">
          <div className="single-product-header">
            <h1>{`${singleProduct.name}`}</h1>
          </div>
          <div className="subheader">
            Price: ${`${singleProduct.price}`}
          </div>
          {/* <div className="style-buttons">
            Select style if this is a pokemon
            <select
              value={optionValue}
              onChange={(e) => setOptionValue(e.target.value)}
            >
              <option> Normal </option>
              <option> Egg </option>
              <option> Shiny </option>
            </select>
          </div> */}
          <div className="quantity">
            Quantity:
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
            </select>
          </div>
          <button type="buy" className="buy"> Buy Now </button>
          <button
            onClick={() => addHandler({ singleProduct, quantity })}
            type="cart" className="cart">
            Add to Cart
          </button>
        </div>
      </section>
    </>
  )
};

export default SingleProduct;
