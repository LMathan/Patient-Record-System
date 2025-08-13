import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/patients')
      .then(res => setPatients(res.data));
  }, []);

  return (
    <div>
      <h2>All Patients</h2>
      <Link to="/add">Add Patient</Link>
      <ul>
        {patients.map(p => (
          <li key={p._id}>
            <Link to={`/patient/${p._id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}