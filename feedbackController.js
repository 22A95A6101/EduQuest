import express from 'express';
import Feedback from './Feedback';

const router = express.Router();

router.post('/submit-feedback', async (req, res) => {
    try {
      const feedbackData = req.body;
      const newFeedback = new Feedback(feedbackData);
      await newFeedback.save();
      res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      console.error('Error submitting feedback: ', error);
      res.status(500).json({ message: 'Error submitting feedback' });
    }
  });
  
  export default router;