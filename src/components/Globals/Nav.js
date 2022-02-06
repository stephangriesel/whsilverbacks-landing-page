import React from 'react';
import logo from '../../images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components';

function Nav(){
  return(
    <Wrapper>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <a href="/" className="navbar-brand logo">
          <img className='logo' src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className='nav-item'>
              <a className='nav-link' href="/">Home</a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' id="navbarDropdown" role="button" data-toggle="dropdown" href="/">About</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item small" href="/why">Why ChipChop</a>
                <div className="dropdown-divider" ></div>
                <a className="dropdown-item small" href="/approach">Approach</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item small" href="/corevalues">Core Values</a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="/portfolio">Portfolio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="/contact">Contact</a>
            </li>
            <li className="nav-item ml-sm-5 cart-icon toggle">
                <button className="snipcart-checkout"><span className="bag"><FaShoppingCart /></span></button>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
a:active {
  background-color: var(--mainWhite) !important;
}
.navbar {
  background:rgba(255,255,255,0.8) !important;
}
.navbar-brand {
  width:30%;
  text-align:center;
}
.navbar-brand img {
  width:8em;
}
.snipcart-checkout {
  border:none;
}
.cart-icon {
  display:flex;
  align-items:center;
}

`

export default Nav;