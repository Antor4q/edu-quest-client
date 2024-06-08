import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useUsers = (dat) => {
    const axiosSecure = useAxios()
    return  useQuery({
            queryKey : ['users'],
            queryFn: async()=>{
                const res =await axiosSecure.get(`/users?dat=${dat}`)
                 return res.data
            }
        })
   
   
};

export default useUsers;