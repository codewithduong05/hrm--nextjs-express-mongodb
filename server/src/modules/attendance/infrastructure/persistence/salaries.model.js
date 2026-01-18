import mongoose from 'mongoose';
const salarySchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee_Profile'
  },
  baseSalary: {
    type: Number,
    required: true
  },
  bonus: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Draft', 'Approved'],
    default: 'Draft'
  }
});

const Salary = mongoose.model('Salary', salarySchema);
export default Salary;
