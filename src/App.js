import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DataSubmissionForm from './components/DataSubmissionForm';
import Shirt from './components/category/Shirt';
import Pants from './components/category/Pants';
import Shorts from './components/category/Shorts';
import DressShirt from './components/category/Dressshirts';
import Profile from './components/Profile';

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleDataSubmit = (data) => {
    setUserData(data);
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submit-data" element={<DataSubmissionForm onSubmit={handleDataSubmit} />} />
      <Route path="/profile" element={<Profile userData={userData} />} />
      <Route path="/shirt" element={<Shirt />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/dress-shirt" element={<DressShirt />} />
    </Routes>
  );
};

export default App;
