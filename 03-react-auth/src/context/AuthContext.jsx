import { createContext } from 'react'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear la función que proveerá el contexto (provider)
const AuthProvider = ({ children }) => {
// Acá va mi lógica del proveedor

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