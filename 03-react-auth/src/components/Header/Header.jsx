import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuth'
import './header.scss'

const Header = () => {
  const { logout, isAuth } = useAuthContext()

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  return (
    <nav className='header'>
        <NavLink to='/' className='header__logo'>LOGO</NavLink>
        <ul className='header__nav-list'>
            <li className='header__list-item'>
                <NavLink
                    to="/"
                    className={({ isActive }) => linkIsActive(isActive)}
                >Home
                </NavLink>
            </li>

            <li className='header__list-item'>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => linkIsActive(isActive)}>Dashboard
                </NavLink>
            </li>

            {isAuth
              ? (
                <>
                  <li className='header__list-item'>
                      <NavLink
                        to="/secret"
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Secret
                      </NavLink>
                  </li>

                  <li className='header__list-item'>
                      <NavLink
                        to="/"
                        className='header__item-link'
                        onClick={logout}
                      >Logout
                      </NavLink>
                  </li>
                </>
              )
              : (
                <>
                  <li className='header__list-item'>
                      <NavLink
                        to="/login"
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Login
                      </NavLink>
                  </li>

                  <li className='header__list-item'>
                      <NavLink
                        to="/signup"
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Signup
                      </NavLink>
                  </li>
                </>
              )
            }
        </ul>
    </nav>
  )
}
export default Header