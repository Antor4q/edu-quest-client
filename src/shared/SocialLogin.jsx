import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const {googleSign} = useAuth()

    const handleGoogleSign = async() => {
       await googleSign()
        .then(result => {
            if(result.user){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully sign in",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            console.log(result.user)
        })
    }
    return (
        <>
        
        <p>Or Sign In with</p>
        <button onClick={handleGoogleSign} className="w-full btn text-[#B51B75] btn-outline my-4 rounded-lg px-6 py-3 border">Google</button>
        </>
    );
};

export default SocialLogin;