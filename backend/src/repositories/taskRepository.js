import Task from "../schema/task.js";

const getAllTasks = async () => {
  return await Task.find();
};

const createTask = async (taskData) => {
  return await Task.create(taskData);
};

const updateTask = async (id, taskData) => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
}


export default {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};