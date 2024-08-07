import { useForm } from "react-hook-form"
import logo from '../assets/react.svg'

const ReactHookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // En react-hook-form, no es necesario usar el event.preventDefault() ya que handleSubmit se encarga de eso
    const onSubmit = data => console.log(data);

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >

          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName')}
          />

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
          />
        {errors.lastName && <span>Last name should be a letter</span>}

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age')}
          />

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender' {...register('gender')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email', { required: true })}
          />
         {errors.email && <span>Email field is required</span>}

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password', { required: true })}
          />
        {errors.password && <span>Password field is required</span>}

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm