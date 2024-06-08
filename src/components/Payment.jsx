import { Elements } from "@stripe/react-stripe-js";
import TitleSection from "../shared/TitleSection/TitleSection";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)
    const {id} = useParams()
    const axiosSecure = useAxios()

     const {data,isPending} = useQuery({
        queryKey: ['class'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/classesDetail/${id}`)
            return data
        }
     })
   if(isPending){
    return <span className="font-bold text-4xl text-center h-screen">Loading....</span>
   }
    return (
        <div className="min-h-screen">
            <div className="max-w-[1440px] mx-auto">
                <TitleSection subHeading={'Complete this step'} heading={'Hey! Pay for this class'}></TitleSection>

               <div className="w-1/3 bg-pink-50 p-10 h-[200px]  rounded-xl mx-auto">
               <Elements stripe={stripePromise}>
                    <CheckoutForm data={data}/>
                </Elements>
               </div>
            </div>
        </div>
    );
};

export default Payment;