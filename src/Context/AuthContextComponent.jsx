import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createContext, useState } from "react"
import auth from "../firebase/firebase"

export const AuthContext = createContext(null)
export default function AuthContextComponent({children}) {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //new user
    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// google auth
const googleSingIn = () =>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
}

// github auth
const githubSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, githubProvider)
}

    const authInfo ={user, createNewUser, userLogin, loader, googleSingIn, githubSignIn, setLoader}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
