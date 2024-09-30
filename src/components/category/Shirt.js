// Shirt.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shirt.css'; 

const Shirt = ({ children }) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToHome = () => {
    navigate('/dashboard'); 
  };

  const goToSubmitData = () => {
    navigate('/submit-data'); 
  };

  const goToShirts = () => {
    navigate('/shirt');
  };

  const goToPants = () => {
    navigate('/pants'); 
  };

  const goToShorts = () => {
    navigate('/shorts'); 
  };

  const goToDressShirts = () => {
    navigate('/dress-shirt'); 
  };

  const goToLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="dashboard">
      <header className="navbar">
        <h1>Artemis</h1>
        <nav>
          <ul>
            <li><button onClick={goToHome}>Home</button></li>
            <li><button onClick={goToSubmitData}>Submit Data</button></li>
            <li><button onClick={goToProfile}>Profile</button></li>
            <li><button onClick={goToLogout}>Logout</button></li>
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
          <h2>Shirts</h2>
          <div className="product-grid">
            {/* Example Product */}
            <div className="product-card">
              <img src="path_to_image.jpg" alt="Product Name" />
              <h3>Product Name</h3>
              <p>$29.99</p>
              <button>Add to Cart</button>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </section>
        
        {/* Render child components here */}
        {children}
      </main>

      <footer className="footer">
        <p>&copy; 2024 My Clothing Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Shirt;
