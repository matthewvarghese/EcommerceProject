import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/dashboard');
  const goToProfile = () => navigate('/profile');
  const goToLogout = () => navigate('/');

  return (
    <div className="dashboard">
      <header className="navbar">
        <h1>About Me</h1>
        <nav>
          <ul>
            <li><button onClick={goToHome}>Home</button></li>
            <li><button onClick={goToProfile}>Profile</button></li>
            <li><button onClick={goToLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>

      <main className="main-content about-me">
        <section className="about-section">
          <h2>Hello, I'm Matthew Varghese</h2>
          <p>
            Welcome to my cool side project! This is something I’ve been working on in my spare time, 
            and I hope it grows into something even bigger someday. 
            I'm passionate about creating innovative solutions, and this project is a step toward that journey. 
            Stay tuned for updates, and thanks for stopping by!
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Matthew Varghese. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
