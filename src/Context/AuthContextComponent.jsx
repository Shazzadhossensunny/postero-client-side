import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase"

export const AuthContext = createContext(null)
export default function AuthContextComponent({children}) {
    const [reload, setReload] = useState(false)
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
// onAuthStateChanged
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
        setLoader(false)
        return () =>{
            unSubscribe()

        }
     })

},[reload])

// sing out
const logOut = () => {
    setLoader(true)
    return signOut(auth)
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

// update user profile
const userUpdateProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,


       })

 }

    const authInfo ={user, createNewUser, userLogin, loader, googleSingIn, githubSignIn, setLoader, logOut, setReload,  userUpdateProfile}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
