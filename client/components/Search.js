import React, {useEffect, useState} from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import QuickAdd from '../components/BrowseProducts/QuickAdd'


const Search = () => {
    const products = useSelector((state) => state.products.searched)

return (
    <div>
        { products.length > 0 ?
        products.map((pokemon) => {
            return <Card style={{ width: '18rem', height: '30rem', float: 'left', padding: '10px', margin: '10px', display: 'inline-block' }}>
            <Card.Img class="h-25 w-30" variant="top" className="pokemonImg" src={`${pokemon.imageUrl}`} />
            <Card.Body style={{ height: '15rem' }}>
                <Card.Title>
                <Link to={`/products/${pokemon.id}`}>{`${pokemon.name}`}</Link>
                </Card.Title>
                <Card.Text style={{ height: '13rem', overflow: 'scroll', overflowX: 'hidden', overflowY: "auto" }}>
                    {`${pokemon.description}`}</Card.Text>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                {<QuickAdd product={pokemon} key={pokemon.id} />}
                </div>
            </Card.Body>
        </Card>
        }
                    ) : <div>Sorry no products found with your Search Term</div>}
        
    </div>
)
}
export default Search