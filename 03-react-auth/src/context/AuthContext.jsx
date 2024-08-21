import { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear la función que proveerá el contexto (provider)
const AuthProvider = ({ children }) => {
// Acá va mi lógica del proveedor
    const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
    const [userPayload, setUserPayload] = useState(null) // ¿Quién soy?: JWT payload

    const login = (jwtToken) => {
        localStorage.setItem('token', jwtToken)
        const payload = jwtDecode(token)
        setIsAuth(true)
        setUserPayload(payload)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUserPayload(null)
    }

    const data = {
    // Las cosas que queremos compartir
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }