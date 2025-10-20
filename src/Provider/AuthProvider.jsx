import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebasse/firbase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user/ registration
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const logIn = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => toast.success("Logged in successful"))
            .catch(error => toast.error(error.code))
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
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
        logOut,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;