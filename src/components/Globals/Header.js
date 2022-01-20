import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
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
        <Navbar />
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
z-index:999;
position: sticky;
top:0;
margin-bottom:8em;
/* margin-top:6em; */
.header {
  height:5em;
}
.small {
  /* height:3em; */
  .logo {
  height:5em;
}
}
`