import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
        <NavLink to='/' className='header__logo'>LOGO</NavLink>
        <ul className='header__nav-list'>
            <li className='header__list-item'>
                <NavLink to="/" className='header__item-link header__item-link--is-active'>Home</NavLink>
            </li>
            <li className='header__list-item'>
                <NavLink to="/dashboard" className='header__item-link'>Dashboard</NavLink>
            </li>
            <li className='header__list-item'>
                <NavLink to="/secret" className='header__item-link'>Secret</NavLink>
            </li>
            <li className='header__list-item'>
                <NavLink to="/login" className='header__item-link'>Login</NavLink>
            </li>
            <li className='header__list-item'>
                <NavLink to="/signup" className='header__item-link'>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default Header