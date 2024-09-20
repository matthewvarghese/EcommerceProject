import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './DataSubmissionForm.css'; 

const DataSubmissionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    state: '',
    school: '',
  });

  const navigate = useNavigate();

  const sanitizeInput = (input) => {
    const trimmedInput = input.trim(); 
    const escapedInput = trimmedInput.replace(/[<>\/]/g, ''); 
    return escapedInput;
  };

  const handleChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value); 
    setFormData({ ...formData, [e.target.name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Invalid email format');
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      alert('Invalid phone number format. Please enter a 10-digit number.');
      return;
    }

    onSubmit(formData);
    navigate('/profile'); 
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
