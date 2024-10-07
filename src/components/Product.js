import React from 'react';

const Product = ({ product }) => {
    const handleCheckout = async () => {
        const response = await fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId: product.price }), 
        });

        if (response.ok) {
            const session = await response.json();
            window.location.href = session.url; 
        } else {
            console.error('Failed to create checkout session');
        }
    };

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <img 
                src={product.image} 
                alt={product.name} 
                className="product-image" 
            />
            <p>Price: ${(product.price / 100).toFixed(2)}</p>
            <button onClick={handleCheckout}>Add to Cart</button>
        </div>
    );
};

export default Product;
