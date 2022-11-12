import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase";

const auth = getAuth(app);
export const userContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const userInfo = {
        user,
        userRegister,
        logIn,
        logInWithGoogle,
        logOut,
        loading,
    };
    return (
        <userContext.Provider value={userInfo}>{children}</userContext.Provider>
    );
};

export default AuthContext;
