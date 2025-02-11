import React from 'react';
const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{price} руб.</p>
        </div>
    );
};
export default ProductCard;