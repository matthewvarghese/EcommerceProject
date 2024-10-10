import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DataSubmissionForm from './components/DataSubmissionForm';
import Shirt from './components/Shirt';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Success from './Success';
import Cancel from './Cancel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import FullPageComponent from './FullPageComponent';

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleDataSubmit = (data) => {
    setUserData(data);
  };
  

  return (
    <Routes>

        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/submit-data" element={<DataSubmissionForm onSubmit={handleDataSubmit} />} />
        <Route path="/profile" element={<Profile userData={userData} />} />
        <Route path="/shirt" element={<Shirt />} />
      </Routes>

  );
};

export default App;
