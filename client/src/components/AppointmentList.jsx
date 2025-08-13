import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appt => (
          <li key={appt._id}>
            {appt.patientId?.name || 'Unknown'} - {new Date(appt.date).toLocaleString()} with {appt.doctor} for {appt.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
