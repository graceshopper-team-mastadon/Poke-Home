import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";

const SingleOrderProduct = (props) => {
  const { product } = props;
  const orderProduct = product.orderProduct;
  const cost = orderProduct.count * product.price;

  const orderPokeImg = {
    width: "30%",
    height: "30%",
  };

  return (
    <div class="container flex-column p-2">
      <Card>
        <Card.Body>
          <div class="row">
            <div class="col-sm">
              <div class="p-2">{product.name}</div>
              <div class="p-2">Qty: {orderProduct.count}</div>
              <div class="p-2">${cost.toFixed(2)}</div>
            </div>
            <div class="col-sm">
              <Card.Body>
                <img style={orderPokeImg} src={`${product.imageUrl}`} />
              </Card.Body>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleOrderProduct;
