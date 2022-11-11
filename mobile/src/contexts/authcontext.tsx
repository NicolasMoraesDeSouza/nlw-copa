import { createContext, ReactNode } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { useState, useEffect } from 'react'
WebBrowser.maybeCompleteAuthSession();
interface UserProps {
    name: string,
    avatarUrl: string
}
export interface AuthContextDataProps {
    user: UserProps,
    isUserLoading: boolean,
    signIn: () => Promise<void>
}
interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps) 

export function AuthContextProvider ({ children } : AuthProviderProps){
    const [isUserLoading, setisUserLoading] = useState(false)

    const [request, response, prompAsync] = Google.useAuthRequest({
        clientId: '827649355741-3a5hrihvg4k7q7fsthtm3sqnpvmqmtv0.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })
    async function signIn ( ){

        try {
            setisUserLoading(true)
            await prompAsync()
        } catch (error) {
           console.log(error)
           throw error
        } finally {
            setisUserLoading(false)
        }
        
    }
    async function signInWithGoogle(accessToken: string) {
        console.log('TOKEN DE AUTENTICAÇÃO ===>', accessToken)
    }
    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            signInWithGoogle(response.authentication.accessToken)
        }
    }, [response])
    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user: {
                name: 'Rodrigo',
                avatarUrl: 'https://github.com/nicomsz.png'
            }
        }}>
            {children}

        </AuthContext.Provider>
    )
}