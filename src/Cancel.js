import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Cancelled</h1>
      <p>Your payment has been cancelled.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Cancel;
