import { useState, useEffect } from 'react'
import { getMeUserService } from '../services/userServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getMeUserService(token)
        setUserData(response.data)
      } catch (error) {
          console.error('Ocurrio un error al obtener los datos del usuario', error.message)
      }
    }
    getUserData()
  }, [token])

  return (
    <>
      <h1>Dashboard</h1>
      {userData?.first_name && <p>Welcome {userData.first_name}</p>}
      {userData?.last_name && <p>{userData.last_name}</p>}
      {userData?.email && <p>{userData.email}</p>}
      {userData?.role && <p>{userData.role}</p>}
      {userData?.gender && <p>{userData.gender}</p>}
    </>
  )
}
export default Dashboard