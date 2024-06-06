import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import usePayments from "../hooks/usePayments";

const CheckoutForm = ({data}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [err,setErr] = useState('')
    const axiosSecure = useAxios()
    const [clientSecret,setClientSecret] = useState("")
    const {user} = useAuth()
    const [paymentData] = usePayments()
    const navigate = useNavigate()
   
     const classId = data?.id

    
    const dat = paymentData?.find(item => item.title === data?.title)
    

     const price = data?.price
     
     useEffect(()=>{
        axiosSecure.post("/payment-intent",{price: price})
        .then(res =>{
           
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,price])

    

    const {mutateAsync} = useMutation({
        mutationFn : async(userData) => {
            const {data :dat} = await axiosSecure.post("/payment",userData)
            return dat
        },
        onSuccess : ()=> {
           
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully enrolled",
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(()=>{
                    navigate("/dashboard/myenroll-class")
              },500)
        }
      })

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        })
        if(error){
           
            setErr(error.message)
        }
        else{
            console.log("payment method is", paymentMethod)
            setErr("")
        }

        const {paymentIntent,error:err} = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : card,
                billing_details: {
                    name : user?.displayName,
                    email : user?.email,
                }
            }
        })
        if(err){
            console.log(err)
        }
        else{
            if(paymentIntent.status === 'succeeded'){
             
                if(dat){
                 
                    const totalEnrolled = {
                        totalEnrolled : dat?.totalEnrolled
                    }
                    const {data:updatedData} = await axiosSecure.patch(`/payment/${data?.title}`,totalEnrolled)
                    if(updatedData?.modifiedCount > 0){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You have successfully enrolled",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          setTimeout(()=>{
                                navigate("/dashboard/myenroll-class")
                          },500)
                      return 
                    }
                   
                }
               
                const successPayment = {
                    name : data?.name || user?.displayName,
                    email : data?.email || user?.email,
                    title : data?.title,
                    price : data?.price,
                    description : data?.description,
                    classId,
                    transactionId : paymentIntent.id,
                    totalEnrolled : 1
                }
                mutateAsync(successPayment)
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            
             <button type="submit" className="btn px-5 mt-10 text-white btn-outline bg-pink-600" disabled={!stripe || !clientSecret}>Pay</button>
            </form>
            {
                err && <span className="text-red-600">{err}</span>
            }
        </div>
    );
};

export default CheckoutForm;
CheckoutForm.propTypes = {
    data : PropTypes.object
}