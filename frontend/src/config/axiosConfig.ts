import axios from 'axios'

const axiosInstance = axios.create({
    import.meta.env.VITE_BACKEND_URL,
    timeout: 10000
})

export default axiosInstance;