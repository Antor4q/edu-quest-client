import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosApi = axios.create({
    baseURL : 'https://skill-path-server.vercel.app'
    // baseURL : 'http://localhost:5000'
    
})
const useAxios = () => {
  const {logOut} = useAuth()
  const navigate = useNavigate()
    axiosApi.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
     
        config.headers.authorization = `Bearer ${token}`
        return config;
      }, function (error) {
       
        return Promise.reject(error);
      });

      axios.interceptors.response.use(function (response) {
        
        return response;
      },  async(error) =>{
       
        const status = error.response.status
        if(status === 401 || status === 403){
         
           await logOut()
           navigate("/signIn")
        }
        return Promise.reject(error);
      });
     
    return axiosApi
};

export default useAxios;