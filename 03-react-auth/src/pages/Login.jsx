import { useForm } from 'react-hook-form'
import { loginUserService } from '../services/userServices'
import { useAuthContext } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/react.svg'
import '../styles/form.css'

const Login = () => {
  const navigate = useNavigate()

  const { login } = useAuthContext()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if(response.status === 200) {
        // Guardamos el token en el localStorage del navegador.
        // Este dato permanece aún si el navegador se cierra y se vuelve a abrir.
        login(response.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Ocurrio un error al iniciar sesión', error.message)
    }
  }

  return (
    <main className="form-signin w-100 m-auto">
    <form onSubmit={handleSubmit(onSubmit)}>
      <img
        className="mb-4"
        src={logo}
        alt=""
        width={72}
        height={57}
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          {...register('email', { required: true })}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      {errors.email && <span>This field is required</span>}

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      {errors.password && <span>This field is required</span>}

      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
    </form>
  </main>
  )
}
export default Login