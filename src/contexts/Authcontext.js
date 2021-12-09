import React, { Children } from "react";
import "../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, SetCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            SetCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // signup Function
    async function signup (email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        const user = auth.currentUser;
        SetCurrentUser({
            ...user,
        });
    }

    // Login Function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword (auth, email, password);
    }

    // logout Function
    function logout (){
        const auth = getAuth();
        return signOut (auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && Children}
        </AuthContext.Provider>
    )
}