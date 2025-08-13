import React, { useState } from 'react';
import axios from 'axios';

export default function PatientForm() {
  const [patient, setPatient] = useState({
    _id: '',
    name: '',
    age: '',
    gender: '',
    contact: '',
    address: '',
    medicalHistory: ''
  });

  const handleChange = e => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

const handleSubmit = async e => {
  e.preventDefault();
  const historyArray = patient.medicalHistory.split(',').map(s => s.trim());

  const patientData = {
    ...patient,
    medicalHistory: historyArray
  };

  // Remove _id if it's empty or invalid
  if (!patient._id || patient._id.trim() === '') {
    delete patientData._id;
  }

  try {
    await axios.post('http://localhost:5000/api/patients', patientData);
    alert("Patient Added");
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    alert('Error adding patient');
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <input name="_id" placeholder="Patient ID (Optional)" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="contact" placeholder="Contact" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="medicalHistory" placeholder="Medical History (comma separated)" onChange={handleChange} />
      <button type="submit">Add Patient</button>
    </form>
  );
} 
