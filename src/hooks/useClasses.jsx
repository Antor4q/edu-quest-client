import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useClasses = () => {
    const axiosSecure = useAxios()

    const {data,refetch,isPending} = useQuery({
        queryKey : ['classes'],
        queryFn: async()=>{
            const res = axiosSecure.get("/classes")
           
            return res
        }
    })
   
    return [data,refetch,isPending]
};

export default useClasses;