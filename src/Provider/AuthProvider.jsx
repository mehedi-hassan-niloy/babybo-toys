import { createContext, useEffect, useState } from "react";
import app from "../firebases/firebase.config";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup,  updateProfile,  signOut, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";






export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoadin] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password, name, photo) => {
        try {
            setLoadin(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photo
            });
            return userCredential;
        }
        catch (error) {
            return error;
        }
    }

    const signIn = (email, password) => {
        setLoadin(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoadin(true);
        return signInWithPopup(auth, googleProvider);
    }
    

    const logOut = () => {
        setLoadin(true)
        return signOut(auth)

    }

    


    useEffect(() => {
        const unsubdcribe = onAuthStateChanged(auth, logUser => {
            setUser(logUser)
            setLoadin(false)


        }, [])
        return () => {
            unsubdcribe()
        }
    })

  

    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        setLoadin,
        googleSignIn


    }
    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProvider;