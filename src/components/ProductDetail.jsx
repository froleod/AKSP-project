import React from 'react';
import { useParams } from 'react-router-dom';

import products from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(prod => prod.id === parseInt(id));

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Price: {product.price}</p>
        </div>
    );
};

export default ProductDetail;