import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useAllClasses = (dat) => {
    const axiosSecure = useAxios()
    const status = 'Accepted'
    return  useQuery({
            queryKey : ['classes'],
            queryFn: async()=>{
                const res =await axiosSecure.get(`/users/${status}?dat=${dat}`)
                 return res.data
            }
        })
};

export default useAllClasses;