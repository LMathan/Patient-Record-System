import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h2>Patient Record System</h2>
      <ul>
        <li><Link to="/add">Add New Patient</Link></li>
        <li><Link to="/appointments/add">Schedule Appointment</Link></li>
        <li><Link to="/patients">View Patients</Link></li>
        <li><Link to="/appointments">View Appointments</Link></li>
      </ul>
    </div>
  );
}
