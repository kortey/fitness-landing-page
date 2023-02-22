import React,{useState} from 'react'
import YellowButton from './YellowButton'
import { MenuRounded } from '@mui/icons-material'
import { CloseRounded } from '@mui/icons-material'

const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false)
  return (
    <div className='navbar'>
    <nav>
      <div className='logo'>Dietly</div>
      <ul className='nav-menu'>
         <li className='nav-item'>Programs</li>
         <li className='nav-item'>Services</li>
         <li className='nav-item'>News</li>
         <li className='nav-item'>About Us</li>
      </ul>
      {showMenu &&<ul className='mobile-nav-menu'>
         <li className='mobile-nav-item'>Programs</li>
         <li className='mobile-nav-item'>Services</li>
         <li className='mobile-nav-item'>News</li>
         <li className='mobile-nav-item'>About Us</li>
      </ul>}
      <YellowButton text="let'a talk"/>
      <button className='hembeger-menu' onClick={e =>setShowMenu(!showMenu)}>{showMenu? <CloseRounded />:< MenuRounded />}</button>
    </nav>
</div>
  )
}

export default Navbar
