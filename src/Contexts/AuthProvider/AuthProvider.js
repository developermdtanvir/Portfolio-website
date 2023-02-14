import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title
        }, [title])
    }
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
        return () => {
            return unsubcribe
        }
    })
    const logOut = () => {
        return signOut(auth)
    }
    const loginWithEmailandPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Auth = {
        googleSignIn,
        user,
        logOut,
        loginWithEmailandPassword,
        useDocumentTitle
    }
    return (
        <AuthContext.Provider value={Auth}>
            {children}
        </AuthContext.Provider>
    )
}
