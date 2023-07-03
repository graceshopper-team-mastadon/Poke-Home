import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../BrowseProducts/Product";
import { getProductCategory } from "../../slices/productsSlice";
import { Link } from "react-router-dom";


const New = () => {
    const dispatch = useDispatch();
    const genProducts = useSelector((state) => state.products.generationProducts);
    useEffect(() => {
        dispatch(getProductCategory("V"));
    }, []);

    console.log("genproducts", genProducts)

    return (
        <ul className="new">
            {genProducts.map((product) => {
                return (<li className="new-product" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img src={product.imageUrl} className="new-product-photo"></img>
                    </Link>
                </li>)
            })}
        </ul>
    )
};
export default New;