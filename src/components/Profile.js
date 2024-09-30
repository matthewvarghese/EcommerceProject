import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; 
import { profile } from "../api/profile_api"; // Import the profile function

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await profile(); // Call the updated profile function
        setUserData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>No user data available. Please submit your information.</p>;
  }

  const handleDataSubmissionRedirect = () => {
    navigate('/submit-data');
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <p><strong>First Name:</strong> {userData.firstName}</p>
        <p><strong>Last Name:</strong> {userData.lastName}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>State:</strong> {userData.state}</p>
        <p><strong>School:</strong> {userData.school}</p>
      </div>
      <div className="button-container">
        <button onClick={handleDataSubmissionRedirect} className="edit-button">Edit Data</button>
        <button onClick={handleBackToDashboard} className="back-button">Back to Dashboard</button>
      </div>
    </div>
  );
};

export default Profile;
