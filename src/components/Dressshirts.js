import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import useProducts from '../components/useProducts';
import Product from './Product';

const Dressshirts = ({ children }) => {
  const navigate = useNavigate();
const { products, loading, error } = useProducts();
  const goToProfile = () => navigate('/profile');
  const goToHome = () => navigate('/dashboard');
  const goToSubmitData = () => navigate('/submit-data');
  const goToShirts = () => navigate('/shirt');
  const goToPants = () => navigate('/pants');
  const goToShorts = () => navigate('/shorts');
  const goToDressShirts = () => navigate('/dress-shirt');
  const goToLogout = () => navigate('/');

  return (
    <div className="dressshirt">
      <header className="navbar">
        <h1>Artemis</h1>
        <nav>
          <ul>
            <li><button onClick={goToHome}>Home</button></li>
            <li><button onClick={goToSubmitData}>Submit Data</button></li>
            <li><button onClick={goToProfile}>Profile</button></li>
            <li><button onClick={goToLogout}>Logout</button></li>
            <li>
              <form action="https://4e0e-173-59-33-48.ngrok-free.app/create-checkout-session" method="POST">
                <button type="submit">Checkout</button>
              </form>
            </li>
          </ul>
        </nav>
      </header>

      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li><button onClick={goToShirts}>T-Shirts</button></li>
          <li><button onClick={goToPants}>Pants</button></li>
          <li><button onClick={goToShorts}>Shorts</button></li>
          <li><button onClick={goToDressShirts}>Dress Shirts</button></li>
        </ul>
      </aside>

      <main className="main-content">
        <section className="product-display">
          <h2>Featured Products</h2>
          {loading && <p>Loading products...</p>}
          {error && <p>Error: {error}</p>}
          <div className="product-grid">
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Artemis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dressshirts;
