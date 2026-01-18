import mongoose from 'mongoose';
const performanceReviewsSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee_Profile'
  },
  period: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const PerformanceReview = mongoose.model('PerformanceReview', performanceReviewsSchema);
export default PerformanceReview;
