import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const ContactModel = mongoose.model('Contact', contactSchema);

export default ContactModel;
