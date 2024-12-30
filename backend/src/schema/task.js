import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },

});

export default mongoose.model("Task", taskSchema);
