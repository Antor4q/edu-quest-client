import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const usePayments = () => {
    const axiosSecure = useAxios()
    const {data:paymentData} = useQuery({
        queryKey : ['paymentClassId'],
        queryFn : async()=>{
            const {data} = await axiosSecure.get("/isPayment")
            return data
        }
    })
    return [paymentData]
};

export default usePayments;