import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:import.meta.env.FRONTEND_URL
})

export default axiosInstance

