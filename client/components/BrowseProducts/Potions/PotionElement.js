import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuickAdd from "../QuickAdd";

const PotionElement = (props) => {
  const { potion } = props;
  const potionId = props.potion.id;
  const potionName = props.potion.name;
  const potionDescription = props.potion.description;
  const potionImg = props.potion.imageUrl;
  const bgColor = props.potion.color;

  return (
    <Card
      style={{
        width: "18rem",
        height: "30rem",
        float: "left",
        padding: "10px",
        margin: "10px",
        display: "inline-block",
        backgroundColor: bgColor,
      }}
    >
      <Card.Img class="h-25 w-30" variant="top" src={`${potionImg}`} />
      <Card.Body style={{ height: "15rem" }}>
        <Card.Title>
          <Link to={`/products/${potionId}`}>{`${potionName}`}</Link>
        </Card.Title>
        <Card.Text
          style={{
            height: "13rem",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {`${potionDescription}`}
        </Card.Text>
        <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
          {<QuickAdd product={potion} key={potion.id} />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PotionElement;
