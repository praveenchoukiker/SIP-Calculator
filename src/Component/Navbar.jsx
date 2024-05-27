import React from 'react'
import Logo from '../assets/react.svg'

const Navbar = ({changeTheme}) => {
  return (
<nav className="navbar bg-dark">
  <div className="container-fluid">
   <a className="navbar-brand text-info" href="#">
      <img src={Logo} a
      lt="Logo" 
      width="30" 
      height="24"
       className="d-inline-block align-text-top"/>
       SIP Calculator
    </a>
    <button className='btn btn-secondary text-info' onClick={() => changeTheme()}>Change Theme</button>

  </div>
</nav>  )
}

export default Navbar
