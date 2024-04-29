const express = require('express');
const router = express.Router();
const ContactUs = require('../models/ContactUs');
router.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
   
    const newSubmission = new ContactUs({ name, email, message });
    await newSubmission.save();
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
