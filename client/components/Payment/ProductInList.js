import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { fetchProduct } from "../../slices/singleProductSlice";

const ProductInList = (props) => {
  const id = props.product.productId;
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('')

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);
      setImageUrl(data.imageUrl);
      setPrice(data.price);
      setName(data.name)
    };
    getProduct();
  }, [])

  return (
    <div className="card" style={{ width: "100px" }}>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <img className="littleguys" src={imageUrl} />
        <p class="card-text">Price : {price}</p>
        <p class="card-text">Count: {props.product.count}</p>
      </div>
    </div>
  );
};

export default ProductInList;
