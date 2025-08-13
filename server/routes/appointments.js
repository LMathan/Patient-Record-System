const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.get('/', async (req, res) => {
  const appointments = await Appointment.find().populate('patientId');
  res.json(appointments);
});

router.post('/', async (req, res) => {
  const newAppointment = new Appointment(req.body);
  await newAppointment.save();
  res.json(newAppointment);
});

router.get('/:id', async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate('patientId');
  res.json(appointment);
});

router.put('/:id', async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Appointment Deleted' });
});

module.exports = router;