import { useAuthContext } from "../hooks/useAuth"

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {
        userPayload?.role == 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Customer</h2>
      }
    </>
  )
}
export default Secret