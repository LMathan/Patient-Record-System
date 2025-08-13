import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppointmentForm() {
  const [form, setForm] = useState({ patientId: '', date: '', doctor: '', reason: '' });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error('Error fetching patients', err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', form);
      alert('Appointment Scheduled');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert('Error scheduling appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="patientId" onChange={handleChange} required>
        <option value="">-- Select Patient --</option>
        {patients.map(p => (
          <option key={p._id} value={p._id}>{p.name} ({p._id})</option>
        ))}
      </select>
      <input name="date" type="datetime-local" onChange={handleChange} required />
      <input name="doctor" placeholder="Doctor Name" onChange={handleChange} />
      <input name="reason" placeholder="Reason" onChange={handleChange} />
      <button type="submit">Schedule</button>
    </form>
  );
}
