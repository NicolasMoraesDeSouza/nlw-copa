import { useContext} from 'react'

import { AuthContext, AuthContextDataProps } from '../contexts/authcontext'

export function useAuth(): AuthContextDataProps{
    const context = useContext(AuthContext)
    return context
}