import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebasse/firbase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);

    // create user/ registration
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // login
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => toast.success("Logged in successful"))
            .catch(error => toast.error(error.code))
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
            .then(() => toast.success("Logged out successfully"))
            .catch(error => toast.error(error.code))
    }

    const authData = {
        user,
        setUser,
        createUser,
        logIn,
        logOut
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;