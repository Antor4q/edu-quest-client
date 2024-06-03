import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useRole = () => {
    const axiosSecure = useAxios()
    const {user,setLoading} = useAuth()
   
    const {data:userRole ,isPending} = useQuery({
        queryKey : ['user'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`)
            setLoading(false)
            return res.data
        }
    })
   
    return [userRole,isPending]
};

export default useRole;