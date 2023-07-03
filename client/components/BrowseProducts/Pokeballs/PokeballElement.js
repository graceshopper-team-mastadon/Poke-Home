import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuickAdd from "../QuickAdd";

const PokeballElement = (props) => {
  const { pokeball } = props;
  const pokeballId = props.pokeball.id;
  const pokeballName = props.pokeball.name;
  const pokeballDescription = props.pokeball.description;
  const pokeballImg = props.pokeball.imageUrl;
  const bgColor = props.pokeball.color;

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
      <Card.Img class="h-25 w-30" variant="top" src={`${pokeballImg}`} />
      <Card.Body style={{ height: "15rem" }}>
        <Card.Title>
          <Link to={`/products/${pokeballId}`}>{`${pokeballName}`}</Link>
        </Card.Title>
        <Card.Text
          style={{
            height: "13rem",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {`${pokeballDescription}`}
        </Card.Text>
        <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
          {<QuickAdd product={pokeball} key={pokeball.id} />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokeballElement;
