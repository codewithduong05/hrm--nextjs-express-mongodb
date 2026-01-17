import mongoose from 'mongoose';

const benefitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  applyTo: {
    type: String,
    enum: ['Role', 'Department'],
    required: true
  }
});

const Benefit = mongoose.model('Benefit', benefitSchema);
export default Benefit;
