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
  /* background-color: red; */
  border-radius: 4px;
  transition: all 0.2s ease-out;
}

.fa-bars {
}

.nav-links-mobile {
  display:none;
}

.menu-icon {
  display:none;
}

@media screen and (max-width: 960px) {
  .NavbarItems {
    position: relative;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 150px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background: rgba(255,255,255,0.8);
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .nav-links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    text-decoration:none;
  }

  .nav-links:hover {
    background-color: #eccecc;
    border-radius: 0;
    color:#fff;
  }

  .navbar-logo {
    /* position: absolute;
    top: 0;
    left: 0; */
    /* transform: translate(25%, 50%); */
  }

  .menu-icon {
    display: block;
    position: absolute;
    color:#000;
    background:red;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .fa-times {
    /* color: #fff;
    font-size: 2rem; */
  }

  .nav-links-mobile {
    /* display: block; */
    /* text-align: center; */
    /* padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem; */
  }

  .nav-links-mobile:hover {
    /* background: #fff;
    color: #1888ff;
    transition: 250ms; */
  }

  .menu-icon {
    /* color:#000;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer; */
  }
}
`

export default Navbar;