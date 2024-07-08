import axios from "axios";

const axiosApi = axios.create({
    baseURL : 'https://skill-path-server.vercel.app'
    
})
const useAxiosPublic = () => {
    return axiosApi
};

export default useAxiosPublic;