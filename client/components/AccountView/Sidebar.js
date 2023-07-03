const React = require("react");
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ListGroup>
                <ListGroup.Item>Profile</ListGroup.Item>
                <ListGroup.Item>Order History</ListGroup.Item>
                <ListGroup.Item>Address Book</ListGroup.Item>
                <ListGroup.Item>Payment Cards</ListGroup.Item>
            </ListGroup>
        </div>
    )

};
export default Sidebar;
