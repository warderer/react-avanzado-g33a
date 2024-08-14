import './App.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Secret from './pages/Secret'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Secret />
      <Login />
      <Signup />
    </>
  )
}

export default App
