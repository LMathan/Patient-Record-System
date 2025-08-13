import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/patients/${id}`)
      .then(res => setPatient(res.data));
  }, [id]);

  if (!patient) return <div>Loading...</div>;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Contact: {patient.contact}</p>
      <p>Address: {patient.address}</p>
      <p>Medical History: {patient.medicalHistory.join(', ')}</p>
    </div>
  );
}