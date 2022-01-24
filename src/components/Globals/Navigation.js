import React, { useState } from 'react';
import { Link } from "gatsby"
import logo from '../../images/logo.svg'
import "../css/navigation.css"
// import { FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components';
import Dropdown from './Dropdown';

function Navbar(){
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return(
    <Wrapper>
      <nav className='navbar'>
        <Link to="/" className='navbar-logo'>
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
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
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
    </Wrapper>
  )
}

const Wrapper = styled.div`

.navbar {
  justify-content:space-evenly;
  margin:0 5em;
  .logo {
    width: 8em;
    height: auto;
  }
  display:flex;
  .nav-menu {
    display:flex;
    justify-content:center;

  }
  ul {
    list-style:none;
    li {
      padding:0 0.5rem;
    }
  }
}

.navbar-logo {
}

.fa-firstdraft {
}

.nav-item {
}

.nav-links {
}

.nav-links:hover {
}

.fa-bars {
}

.nav-links-mobile {
}

.menu-icon {
}

@media screen and (max-width: 960px) {
  
}
`

export default Navbar;