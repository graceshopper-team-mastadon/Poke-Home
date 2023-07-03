import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPotions } from "../../../slices/categorySlice";
import PotionElement from "./PotionElement";
import Pagination from "../../Pagination";
import { useState } from "react";
import CategoryBar from "../../CategoryBar";
import LoadingScreen from "../../LoadingScreen";

const Potions = () => {
  const dispatch = useDispatch();
  const potionss = useSelector((state) => state.categories.potions);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getAllPotions());
  }, []);

    const indexOfLastItems = currentPage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const currentItems = potionss.slice(indexOfFirstItems, indexOfLastItems);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (potionss.length === 0) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <CategoryBar category="Potions" />
                <div class="deck">
                    {potionss.map((potion) => (
                        <PotionElement key={potion.id} potion={potion} />
                    )
                    )}
                </div>
                <div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={potionss.length}
                        paginate={paginate}
                    />
                </div>
            </>
        )
    }

  if (potionss.length === 0) {
    return <h1> Loading your products!! </h1>;
  } else {
    return (
      <div className="browse">
        <div class="deck">
          {potionss.map((potion) => (
            <PotionElement key={potion.id} potion={potion} />
          ))}
        </div>
        <div className="paginate">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={potionss.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
};
export default Potions;
