
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useUsers = (dat,currentPage,perPageUser) => {
    const axiosSecure = useAxios()
    
    return  useQuery({
            queryKey : ['users'],
            queryFn: async()=>{
                const res =await axiosSecure.get(`/users`,{params:{dat,currentPage,perPageUser}})
                 return res.data
            }
        })
   
   
};

export default useUsers;