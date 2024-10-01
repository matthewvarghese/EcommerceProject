import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; 

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/profile', {
                    method: 'GET',
                    credentials: 'include', // Include cookies if needed
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUserProfile();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!user) return <p>Loading...</p>;

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
                <p><strong>Email:</strong> {user.name}</p>
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>State:</strong> {user.state}</p>
                <p><strong>School:</strong> {user.school}</p>
            </div>
            <div className="button-container">
                <button onClick={handleDataSubmissionRedirect} className="edit-button">Edit Data</button>
                <button onClick={handleBackToDashboard} className="back-button">Back to Dashboard</button>
            </div>
        </div>
    );
};

export default Profile;
