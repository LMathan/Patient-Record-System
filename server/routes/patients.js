const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

router.post('/', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.json(newPatient);
});

router.get('/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
});

router.put('/:id', async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

module.exports = router;
