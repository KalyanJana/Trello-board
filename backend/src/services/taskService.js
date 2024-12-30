import taskRepository from '../repositories/taskRepository.js';

const getAllTasks = async (req, res) => {
    return await taskRepository.getAllTasks();
}

const postTask = async (taskData) => {
    return await taskRepository.createTask(taskData);
}

const updateTask = async (id, taskData) => {
    return await taskRepository.updateTask(id, taskData);
}

const deleteTask = async(taskId) => {
    return await taskRepository.deleteTask(taskId);
}

export default {
    getAllTasks,
    postTask,
    updateTask,
    deleteTask,
};