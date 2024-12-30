
import axios from '../config/axiosConfig'

export const getTasks = async () => {
    try{
        const response = await axios.get('/api/v1/tasks')
        console.log(response)
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export const createTask = async (task) => {
    try{
        const response = await axios.post('/api/v1/tasks', task)
        console.log(response)
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export const updateTask = async(task) =>{
    try{
        const response = await axios.patch(`/api/v1/tasks/${task.id}`, task)
        console.log(response)
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export const deleteTask = async(id) =>{
    try{
        const response = await axios.delete(`/api/v1/tasks/${id}`)
        console.log(response)
        return response.data
    }catch(error){
        console.error(error)
        throw
    }
}