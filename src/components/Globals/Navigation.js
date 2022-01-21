import React, { useState } from 'react';
import { Link } from "gatsby"
import logo from '../../images/logo.svg'
import "../css/navigation.css"
import { FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components';
import Dropdown from './Dropdown'

function Navigation(){
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return(
    <>
      <nav className='navigation'>
        <Link to="/" className='navigation-logo'>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

const Wrapper = styled.div`

`

export default Navigation;