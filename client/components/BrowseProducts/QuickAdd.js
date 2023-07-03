import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuickAddToCart, cartUpdate } from "../../slices/cartSlice";
import { Button } from "react-bootstrap";

const axios = require("axios");

const QuickAdd = (props) => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth);

  const { product } = props;

  //   useEffect(() => {
  //     const blah = async () => {
  //     const {data} = await axios.get('/auth/guestCart')
  //     dispatch(cartUpdate(data))
  //       }
  // blah()
  //     }, [])

  const quickAddHandler = async (productInfo) => {
    if (logged) {
      await axios.get("/api/cart");
      await dispatch(QuickAddToCart(productInfo));
    } else {
      await axios.post("/auth/guestCart", productInfo);
      const { data } = await axios.get("/auth/guestCart");
      await dispatch(cartUpdate(data));
    }
  };

  return (
    <button type="button" class="homebutton" onClick={() => quickAddHandler(product)}> Quick Add </button>
  );
};

export default QuickAdd;
