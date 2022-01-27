import React, { useEffect, useState } from "react";
import Nav from './Nav'
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
        <Nav />
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
background:rgba(255,255,255,0.8);
z-index:1;
position: sticky;
top:0;
margin-bottom:3em;
.header {
  height:auto;
  transition:ease-in-out 1s;
}
.small {
  .logo {
  height:5em;
}
}
`