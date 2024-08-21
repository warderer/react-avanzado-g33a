import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Secret from '../pages/Secret'
import Signup from '../pages/Signup'
import { useAuthContext } from '../hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/secret"
          element={isAuth ? <Secret /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
export default RoutesIndex