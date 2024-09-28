import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from "../api/API_Login";
import './styles.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement backend authentication logic here 


    if (email === 'test@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const healthCheck = async () => {
    const response = await fetch('http://localhost:3000/api/health');
    const data = await response.json();
    console.log(data);
  }

  const handleSignup = () => {
    navigate('/signup'); // Navigate to signup page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await LoginAPI(email, password)
          .then((res) => {
            console.log(res)
            if (res.status === 200) {
              navigate('/dashboard');
            } else if (res.status === 404) {
              alert('Invalid credentials');
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
      </form>
      {/* Add the new section for sign up */}
      <p>Don't have an account?</p>
      <a href="/signup" >Sign up</a>
    </div>

  );
};

export default Login;