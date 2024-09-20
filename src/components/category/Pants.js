// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pants.css'; 

const Pants = ({ children }) => {
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
            <li><a href="#" onClick={goToHome}>Home</a></li>
            <li><a href="#" onClick={goToSubmitData}>Submit Data</a></li>
            <li><a href="#" onClick={goToProfile}>Profile</a></li>
            <li><a href="#" onClick={goToLogout}>Logout</a></li>
          </ul>
        </nav>
      </header>

      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li><a href="#" onClick={goToShirts}>T-Shirts</a></li>
          <li><a href="#" onClick={goToPants}>Pants</a></li>
          <li><a href="#" onClick={goToShorts}>Shorts</a></li>
          <li><a href="#" onClick={goToDressShirts}>Dress Shirts</a></li>
        </ul>
      </aside>

      <main className="main-content">
        <section className="product-display">
          <h2>Pants</h2>
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

export default Pants;
