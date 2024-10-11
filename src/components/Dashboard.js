import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import './Dashboard.css'

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-header">About Artemis</h1>
      <p className="about-content">
        Artemis is your ultimate destination for quality apparel. Our mission is to provide
        a seamless shopping experience while offering a wide range of stylish and comfortable
        clothing for every occasion. Whether you're looking for casual wear, work attire, or
        something special, we have you covered. Join us on this fashion journey and discover
        the perfect pieces to express your unique style!
      </p>
    </section>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  const goToProfile = () => navigate('/profile');
  const goToHome = () => navigate('/dashboard');
  const goToSubmitData = () => navigate('/submit-data');
  const goToShirts = () => navigate('/shirt');
  const goToLogout = () => navigate('/');

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
            <li>
            </li>
          </ul>
        </nav>
      </header>

      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li><button onClick={goToShirts}>Products</button></li>
        </ul>
      </aside>

      <main className="main-content">
        <About />
      </main>

      <footer className="footer">
        <p>&copy; 2024 Artemis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
