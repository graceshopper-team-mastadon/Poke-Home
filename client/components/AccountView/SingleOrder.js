import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import SingleOrderProduct from "./SingleOrderProduct";

const singleOrder = () => {
  const location = useLocation();
  const order = location.state.order;
  const products = order.products;

  const date = order.updatedAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString("en-US");

  const random = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);

  return (
    <div class="bg-light">
      <div class="container-fluid">
        <Card className="bg-light text-dark">
          <div class="p-2">
            <h3 class="text-center">Order Details</h3>
          </div>
          <Card>
            <div class="p-2">Order# {`${random}`}</div>
            <div class="p-2">
              Placed at {`${formattedTime}`} on {`${formattedDate}`}
            </div>
            <div class="p-2">Total: $ {`${order.price}`}</div>
          </Card>
          <Card>
            <div class="p-2">
              <h6>Items In Order:</h6>
              <div>
                {products.map((product) => (
                  <div>
                    <SingleOrderProduct key={product.id} product={product} />
                  </div>
                ))}
              </div>
              <div>
                <Link to="/order-history">Back to Order History</Link>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default singleOrder;
