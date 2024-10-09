import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from "../api/API_Login";
import './styles.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    
    <div className="wrapper">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await LoginAPI(email, password)
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
                navigate('/dashboard');
              } else if (res.status === 404) {
                alert('Invalid credentials');
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <h>Welcome to Artemis</h>
        <r>Please sign in for the best experience!</r>

        <div className="input-field">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter your Email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Enter your Password</label>
          
        </div>
        <button type='submit'>Login</button>
        <p className="register">Don't have an account?</p>
        <a href="/signup">Sign up</a>
      </form>
    </div>

    

  );
};

export default Login;

// <div>
    //   <h2>Login</h2>
    //   <form onSubmit={async (e) => {
    //     e.preventDefault();
    //     await LoginAPI(email, password)
    //       .then((res) => {
    //         console.log(res)
    //         if (res.status === 200) {
    //           navigate('/dashboard');
    //         } else if (res.status === 404) {
    //           alert('Invalid credentials');
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //   }}>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       value={email}
          
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     <button type='submit'>Login</button>
    //   </form>
    //   <p>Don't have an account?</p>
    //   <a href="/signup" >Sign up</a>
    // </div>