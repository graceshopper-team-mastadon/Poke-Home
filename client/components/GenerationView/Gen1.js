import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import Product from "../BrowseProducts/Product";
import { getProductCategory } from "../../slices/productsSlice";
import { Container, Card, Col, Row } from "react-bootstrap";
import CategoryBar from "../CategoryBar";

const GenIProducts = () => {
  const dispatch = useDispatch();
  const genProducts = useSelector((state) => state.products.generationProducts);

  useEffect(() => {
    dispatch(getProductCategory("I"));
  }, []);

  return (
    <>
      <CategoryBar category="Generation I" />
      <div className="deck">
        {genProducts.map((product) => (
          <div key={product.id} id="cardItem" className="col-xs-2">
            <Product product={product} key={product.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GenIProducts;
