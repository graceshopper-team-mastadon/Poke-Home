import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../../slices/categorySlice";
import PokemonElement from "./PokemonElement";
import Pagination from "../../Pagination";
import { useState } from "react";
import CategoryBar from "../../CategoryBar";
import LoadingScreen from "../../LoadingScreen";

const Pokemon = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.categories.pokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getAllPokemon());
  }, []);

    const indexOfLastItems = currentPage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const currentItems = pokemons.slice(indexOfFirstItems, indexOfLastItems);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (pokemons.length === 0) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <CategoryBar category="All Pokemon" />
                <div class="deck">
                    {currentItems.map((pokemon) => (
                        <PokemonElement key={pokemon.id} pokemon={pokemon} />
                    )
                    )}
                </div> <br></br>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={pokemons.length}
                    paginate={paginate}
                />
            </>
        )
    }

  if (pokemons.length === 0) {
    return <h1> Loading your products!! </h1>;
  } else {
    return (
      <div className="browse">
        <div class="deck">
          {currentItems.map((pokemon) => (
            <PokemonElement key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="paginate">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={pokemons.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
};
export default Pokemon;
