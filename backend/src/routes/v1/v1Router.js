import express from 'express'
import taskRouter from './task.js'

const router = express.Router()

router.use("/tasks", taskRouter)

export default router;