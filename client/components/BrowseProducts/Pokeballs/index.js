import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokeballs } from "../../../slices/categorySlice";
import PokeballElement from "./PokeballElement";
import Pagination from "../../Pagination";
import { useState } from "react";
import CategoryBar from "../../CategoryBar";
import LoadingScreen from "../../LoadingScreen";

const Pokeballs = () => {
  const dispatch = useDispatch();
  const allpokeballs = useSelector((state) => state.categories.pokeballs);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getAllPokeballs());
  }, []);

    const indexOfLastItems = currentPage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const currentItems = allpokeballs.slice(indexOfFirstItems, indexOfLastItems);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (allpokeballs.length === 0) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <CategoryBar category="Pokeballs" />
                <div class="deck">
                    {allpokeballs.map((pokeball) => (
                        <PokeballElement key={pokeball.id} pokeball={pokeball} />
                    )
                    )}
                </div>
                <div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={allpokeballs.length}
                        paginate={paginate}
                    />
                </div>
            </>
        )
    }
  if (allpokeballs.length === 0) {
    return <h1> Loading your products!! </h1>;
  } else {
    return (
      <div className="browse">
        <div class="deck">
          {allpokeballs.map((pokeball) => (
            <PokeballElement key={pokeball.id} pokeball={pokeball} />
          ))}
        </div>
        <div className="paginate">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={allpokeballs.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
};
export default Pokeballs;
