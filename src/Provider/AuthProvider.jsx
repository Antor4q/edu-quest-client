import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebse.config";

export const SkillContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState("")
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

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