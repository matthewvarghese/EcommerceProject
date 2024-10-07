import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard'); // Redirects to the Dashboard
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <button onClick={handleGoBack}>Back to Dashboard</button>
    </div>
  );
};

export default Success;
