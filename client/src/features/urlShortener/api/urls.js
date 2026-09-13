import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_FRONTEND_URL
})

export default axiosInstance

