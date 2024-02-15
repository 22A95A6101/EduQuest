import express from 'express';
import ContactModel from './ContactModel';// Import the ContactModel

const router = express.Router();

// API endpoint to save contact info
router.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new ContactModel({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Contact information saved successfully.' });
  } catch (error) {
    console.error('Error saving contact information:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

export default router;
