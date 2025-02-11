import React from 'react';
import ProductCard from './ProductCard';

import products from '../data/products';


const ProductList = () => {
    return (
        <div className="product-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductList;