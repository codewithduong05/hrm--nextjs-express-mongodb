import mongoose from 'mongoose';

const systemConfigsSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const SystemConfig = mongoose.model('System_Config', systemConfigsSchema);
export default SystemConfig;
