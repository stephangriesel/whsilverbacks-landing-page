import React, { useEffect, useState } from "react";
// import Navbar from './Navbar'
import Navigation from './Navigation'
import styled from 'styled-components'

export default function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 500)
      );
    }
  }, []);

  return (
    <Wrapper>
      <header className={`header ${small ? "small" : ""
        }`}>
        {/* <Navbar /> */}
        <Navigation />
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
background:rgba(255,255,255,0.8);
z-index:999;
position: sticky;
top:0;
margin-bottom:8em;
/* margin-top:6em; */
.header {
  height:auto;
}
.small {
  /* height:3em; */
  .logo {
  height:7em;
}
}
`