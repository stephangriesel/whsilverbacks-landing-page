import React, { useState } from 'react';
import { Link } from "gatsby"
import { MenuItems } from "./MenuItems"
import "../css/dropdown.css"
import styled from 'styled-components';

function Dropdown(){
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click)

  return (
    <Wrapper>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item,index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .dropdown-menu {
    width:200px;
    position:absolute;
    top:80px;
    list-style:none;
    text-align:start;
    li {
      background:#fff;
      cursor:pointer;
    }

    li:hover {
      background:#979797;
    }
    
    dropdown-menu.clicked {
      display:none;
    }

    dropdown-link {
      display:block;
      width:100%;
      height:100%
      text-decoration:none;
      color:#fff;
      padding:16px;
    }
  }
`

export default Dropdown;