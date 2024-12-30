import express from 'express'
import taskControllers from '../../controllers/taskController.js'
import { validate } from '../../utils/zodValidates.js'
import { taskSchema } from '../../utils/zodSchma.js'

const router = express.Router()

router.get("/", validate(taskSchema), taskControllers.getAllTasks)
router.post("/", validate(taskSchema.partial()), taskControllers.postTask)
router.patch("/:id", taskControllers.updateTask)
router.delete("/:id", taskControllers.deleteTask)

export default router;