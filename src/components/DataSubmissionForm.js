import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './DataSubmissionForm.css'; 
import { submitData } from "../api/data_api"; 

const DataSubmissionForm = ({ userEmail }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: userEmail, 
    phoneNumber: '',
    age: '',
    gender: '',
    state: '',
    school: '',
  });

  const navigate = useNavigate();


  useEffect(() => {
    setFormData(prevData => ({ ...prevData, email: userEmail }));
  }, [userEmail]);


  const sanitizeInput = (input) => {
    const trimmedInput = input.trim(); 
    const escapedInput = trimmedInput.replace(/[<>/]/g, ''); 
    return escapedInput;
  };

  const handleChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value); 
    setFormData({ ...formData, [e.target.name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await submitData(formData);
      console.log(response);
      if (response.status === 404) {
        alert('Invalid credentials');
      }
      
      console.log('Success:', response);
      navigate('/profile'); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Your Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label> 
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="input-field" 
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>School:</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default DataSubmissionForm;
