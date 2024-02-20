import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { createContext, useContext, useEffect, useState } from "react"

export const authContext = createContext()
export const useAuth = () => {
    const context = useContext(authContext)
    if(!context){
        console.log("error contexto no creado")
    }
    return context;
}

export function AuthProvider ({children}){
    const [user, setUser] = useState("")
    useEffect(()=> {
        const suscribed = onAuthStateChanged(auth, (currentUser) =>{
            if(!currentUser){
                console.log("no hjay usuario suscristo")
                setUser("")
            }else{
                setUser(currentUser)
            }
        })
        return() => suscribed()
    },[])
    const register = async (email, password) =>{
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
    }
    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email,password)
        console.log(response)
    }
    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }
    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }
    return <authContext.Provider value={{register, login, loginWithGoogle, logout, user}}>
        {children}
    </authContext.Provider>
}