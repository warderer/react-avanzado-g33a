import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear la función que proveerá el contexto (provider)
const AuthProvider = ({ children }) => {
// Acá va mi lógica del proveedor
    // const [token, setToken] = useState(null) // JWT token
    const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
    const [userPayload, setUserPayload] = useState(null) // ¿Quién soy?: JWT payload

    const login = (jwtToken) => {
        localStorage.setItem('token', jwtToken)
        const payload = jwtDecode(jwtToken)
        setIsAuth(true)
        setUserPayload(payload)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUserPayload(null)
    }

    // Verificar si hay un token en el localStorage, y si es valido, cargarlo en el estado, para evitar que el usuario tenga que iniciar sesión cada vez que entre a la página.
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const payload = jwtDecode(token)
            setIsAuth(true)
            setUserPayload(payload)
        }
    },[])

    const data = {
    // Las cosas que queremos compartir
        isAuth,
        userPayload,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }