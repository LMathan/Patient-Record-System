import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import PatientDetails from './pages/PatientDetails';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './style.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/add" element={<PatientForm />} />
          <Route path="/patient/:id" element={<PatientDetails />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/appointments/add" element={<AppointmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
