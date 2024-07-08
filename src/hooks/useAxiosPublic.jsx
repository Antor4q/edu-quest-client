import axios from "axios";

const axiosApi = axios.create({
    // baseURL : 'https://skill-path-server.vercel.app'
    baseURL : 'http://localhost:5000'
})
const useAxiosPublic = () => {
    return axiosApi
};

export default useAxiosPublic;