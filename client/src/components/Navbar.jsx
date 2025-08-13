
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Patient Record System</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Patient</Link>
        <Link to="/appointments/add">Appointment</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/appointments">Appointments</Link>
      </div>
    </div>
  );
}
