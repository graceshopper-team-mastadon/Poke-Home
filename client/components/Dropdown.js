import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteSingleUser } from "../slices/userSlice";
import { deleteSingleProduct } from "../slices/productsSlice";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import EditUser from "./AdminView/EditUser";

const TableDropdown = (props) => {
  const { item } = props;
  const deleteId = item.id;
  const [itemType, setItemType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (item.role) {
      setItemType("users");
    } else if (item.price) {
      setItemType("products");
    }
  }, []);

  const deleteHandler = async (id) => {
    if (itemType === "users") {
      await dispatch(deleteSingleUser(id));
    } else {
      await dispatch(deleteSingleProduct(id));
    }
  };

  return (
    <div>
      <DropdownButton title="">
        <Dropdown.Item>
          <Link
            to={`/dashboard/${itemType}/edit/${item.id}`}
            state={{ item: item }}
          >
            Edit
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant="danger" onClick={() => deleteHandler(deleteId)}>
            Delete
          </Button>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default TableDropdown;
