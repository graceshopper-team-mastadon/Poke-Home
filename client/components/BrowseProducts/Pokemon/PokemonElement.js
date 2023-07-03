import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuickAdd from "../QuickAdd";

const PokemonElement = (props) => {
  const { pokemon } = props;
  const pokemonId = props.pokemon.id;
  const pokemonName = props.pokemon.name;
  const pokemonDescription = props.pokemon.description;
  const pokemonImg = props.pokemon.imageUrl;
  const bgColor = props.pokemon.color;

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
      <Card.Img
        class="h-25 w-30"
        variant="top"
        className="pokemonImg"
        src={pokemonImg}
      />
      <Card.Body style={{ height: "15rem" }}>
        <Card.Title>
          <Link to={`/products/${pokemonId}`}>{`${pokemonName}`}</Link>
        </Card.Title>
        <Card.Text
          style={{
            height: "13rem",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {`${pokemonDescription}`}
        </Card.Text>
        <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
          {<QuickAdd product={pokemon} key={pokemon.id} />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokemonElement;
