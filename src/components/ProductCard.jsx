import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} style={{ width: '200px', height: '200px' }} />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <Link to={`/products/${id}`}>View Details</Link>
        </div>
    );
};

export default ProductCard;