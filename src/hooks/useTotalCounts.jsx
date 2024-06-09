import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useTotalCounts = () => {
    const axiosSecure = useAxios()
    
    return  useQuery({
            queryKey : ["pagination"],
            queryFn: async()=>{
                const res =await axiosSecure.get("/pagination")
                 return res.data
            }
        })
};

export default useTotalCounts;