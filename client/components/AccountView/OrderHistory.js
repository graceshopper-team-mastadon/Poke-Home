import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderHistory } from "../../slices/orderHistorySlice";
import { Table, Card, Button } from "react-bootstrap";

const OrderHistory = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orderHistory.orders);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  return (
    <>
      {orders.length > 0 ? (
        <div>
          <Card>
            <Card.Body>
              <h5>Order History</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order.id}>
                      <td>
                        {(Math.floor(Math.random() * 10000) + 10000)
                          .toString()
                          .substring(1)}
                      </td>
                      <td>{order.date}</td>
                      <td>${order.price}</td>
                      <td>
                        <Link
                          to="/order-history/single-order"
                          state={{ order: order }}
                        >
                          View Order
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          ;
        </div>
      ) : (
        <div className="order-history">
          <h1>
            You have not placed any orders yet.
          </h1>
          <Link to={"/products"} className="here">Let's change that!</Link>
        </div>
      )}
    </>
  );
};
export default OrderHistory;
