import React, { useState } from 'react';

const Product = ({ product }) => {
    const [errorMessage] = useState('');

    const handleCheckout = async () => {
        const response = await fetch('http://localhost:3001/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId: product.priceId }), 
        });
    
        console.log('Request body:', { priceId: product.priceId }); 
        
        if (response.ok) {
            const session = await response.json();
            window.location.href = session.url; 
        } else {
            const errorData = await response.json();
            console.error('Failed to create checkout session:', errorData);
            alert(`Error: ${errorData.error || 'Unknown error'}`); 
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
            <p>Price: ${(product.price / 100).toFixed(2)}</p> {/* Assuming price is in cents */}
            <button onClick={handleCheckout}>Buy Now</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Product;
