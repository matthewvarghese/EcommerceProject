// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shirt.css'; 

const Dressshirts = ({ children }) => {
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
          <li>
              <form action="http://localhost:3000/create-checkout-session" method="POST">
                <button type="submit">Checkout</button>
              </form>
            </li>
        </ul>
      </aside>

      

      <footer className="footer">
        <p>&copy; 2024 My Clothing Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dressshirts;
