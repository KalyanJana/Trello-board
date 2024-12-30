import taskService from '../services/taskService.js';

const getAllTasks = async(req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
    });
  }
};

const postTask =async(req, res)=> {
 try {
    const newTask = await taskService.postTask(req.body);
    res.status(201).json({
      success: true,
      newTask,
    });
 } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create task",
    });
 }
}

const updateTask = async(req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    res.status(200).json({
      success: true,
      updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update task",
    });
  }
}


const deleteTask = async(req, res) => {
  try {
    const deletedTask = await taskService.deleteTask(req.params.id);
    res.status(200).json({
      success: true,
      deletedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete task",
    })
  }
}

export default {
  getAllTasks,
  postTask,
  updateTask,
  deleteTask,
}