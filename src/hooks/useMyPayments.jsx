import useAuth from "./useAuth";
import usePayments from "./usePayments";


const useMyPayments = () => {
    const [paymentData] = usePayments()
    const {user} = useAuth()
    const emailDAta = paymentData?.filter(item => item?.studentEmail.filter(it => it === user?.email))
    return [emailDAta]
};

export default useMyPayments;