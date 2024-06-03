import { useContext } from "react";
import { SkillContext } from "../Provider/AuthProvider";


const useAuth = () => {
   const auth = useContext(SkillContext)
   return auth
};

export default useAuth;