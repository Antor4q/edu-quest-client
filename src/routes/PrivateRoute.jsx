import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"
import load from "../../public/loading.json"
import Lottie from "lottie-react";
const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
   
    if(loading){
        return  <>
        <div className="flex max-w-screen h-screen items-center text-center justify-center">
         <Lottie animationData={load}/>
        </div>
        </>
    }

    if(user){
        return children
    }
    return <Navigate to={"/signIn"} state={location.pathname} replace></Navigate>
   
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children : PropTypes.node
}