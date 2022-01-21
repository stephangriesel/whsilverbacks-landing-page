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
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
.navigation {
  /* background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); */
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.fa-firstdraft {
  margin-left: 0.5rem;
  font-size: 1.6rem;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  height: 80px;
}

.nav-links {
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-links:hover {
  /* background-color: #1888ff; */
  border-radius: 4px;
  transition: all 0.2s ease-out;
}

.fa-bars {
  color: #000;
}

.nav-links-mobile {
  display: none;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 960px) {
  .navigationItems {
    position: relative;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background: #242222;
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
  }

  .nav-links:hover {
    /* background-color: #1888ff; */
    border-radius: 0;
  }

  .navigation-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }

  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .fa-times {
    color: #fff;
    font-size: 2rem;
  }

  .nav-links-mobile {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  .nav-links-mobile:hover {
    background: #fff;
    /* color: #1888ff; */
    transition: 250ms;
  }

  button {
    display: none;
  }
}
`

export default Navigation;