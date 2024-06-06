import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebse.config";

import useAxios from "../hooks/useAxios";

export const SkillContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState("")
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxios()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const profileUpdate = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : image
        })
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
               const userEmail = { email : currentUser?.email}
               axiosPublic.post("/jwt",userEmail)
               .then(res => {
               
                 localStorage.setItem('access-token', res?.data?.token)
               })
            }
            else{
             
                
                localStorage.removeItem("access-token")
            }
        })
        return ()=> unsubscribe()
    },[])

    const userInfo = {
        user,
        loading,
        setLoading,
        signUp,
        signIn,
        googleSign,
        profileUpdate,
        logOut
    }
    return (
        <SkillContext.Provider value={userInfo}>
            {children}
        </SkillContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node
}