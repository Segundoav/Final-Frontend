import { NavBar } from './NavBar'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className="flex place-content-between items-center">
        <img src={logo} alt="Logo" />
        <NavBar />
    </header>
  )
}

