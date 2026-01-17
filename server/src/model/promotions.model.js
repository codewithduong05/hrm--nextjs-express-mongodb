import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee_Profile'
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  effectiveDate: {
    type: Date,
    required: true
  }
});

const Promotion = mongoose.model('Promotion', promotionSchema);
export default Promotion;
