import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Secret from '../pages/Secret'
import Signup from '../pages/Signup'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
export default RoutesIndex