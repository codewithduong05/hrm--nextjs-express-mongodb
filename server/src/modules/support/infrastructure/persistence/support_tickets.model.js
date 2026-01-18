import mongoose from "mongoose";

const supportTicketSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee_Profile'
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Solved'],
    default: 'Pending'
  }
});

const SupportTicket = mongoose.model('Support_Ticket', supportTicketSchema);
export default SupportTicket;
