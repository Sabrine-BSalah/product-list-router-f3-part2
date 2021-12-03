// import React, { useState, useEffect } from 'react'
// import { ListProducts } from '../Data/Data'
import { Button } from 'react-bootstrap'


const Product = ({ match, history, location }) => {
    // const [product, setProduct] = useState({});

    // console.log(typeof match.params.id)
    // useEffect(() => {
    //     setProduct(ListProducts.find(product => product.id === +match.params.id))
    // }, [match.params.id]);
    const product = location.state

    return (
        <div className="productDetails">
            <h2>{product.name}</h2>
            <h3>{product.descprition}</h3>
            <img src={product.img} alt={product.name} className="productImg" />
            <Button variant="secondary"
                onClick={() => history.goBack()}
            >Go Back</Button>

        </div>
    )
}

export default Product
