import axios from "axios";

const axiosApi = axios.create({
    baseURL : 'http://localhost:5000'
})
const useAxios = () => {
    axiosApi.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
     
        config.headers.authorization = `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
      axios.interceptors.response.use(function (response) {
        
        return response;
      }, function (error) {
        console.log(error)
        return Promise.reject(error);
      });
     
    return axiosApi
};

export default useAxios;