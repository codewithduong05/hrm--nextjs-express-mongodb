import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  targetRole: {
    type: String,
    enum: ['ADMIN', 'EMPLOYEE'],
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;
