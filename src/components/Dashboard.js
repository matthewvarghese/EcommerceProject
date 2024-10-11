import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import './Dashboard.css'



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

      <main className="main-content about-me">
        <section className="about-section">
          <h2>Hi, Welcome to Artemis</h2>
          <p>
            This is something I’ve been working on for a project, 
            and I hope it grows into something even bigger someday. 
            I'm passionate about creating a unqiue business
            and this project is a step toward that journey. 
            I hope you can find whatever clothing you are looking for.
            Happy Shopping!
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Artemis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
