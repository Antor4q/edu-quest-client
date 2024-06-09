import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const usePagination = (link,currentPage,perPageUser) => {
    const axiosSecure = useAxios()
    
    return  useQuery({
            queryKey : [`${link}`],
            queryFn: async()=>{
                const res =await axiosSecure.get(`/${link}`,{params:{currentPage,perPageUser}})
                 return res.data
            }
        })
};

export default usePagination;