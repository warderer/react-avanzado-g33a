import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// Paso #3. Crear un custom hook para consumir el contexto
export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuthContext debe ser usado dentro de AuthProvider')
    }
    return context
}