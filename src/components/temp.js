import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Logo from "../images/logo.png"

const Temp = () =>

  <Wrapper>
    <SEO title="Coming Soon" />
    <img src={Logo} alt="" srcset="" />
    <div>
      <p>
        stretch tents | event construction | project management
      </p>
      <p>
        <span>under construction</span>
      </p>
      <div>
        loading animation goes here
      </div>
      <p>
        Get in touch
      </p>
      <p>
        <a href="mailto:info@silverbacks.co.uk">info@silverbacks.co.uk</a>
      </p>
      <p>
      07956 102133 or 07446 984468
      </p>
      <div>
        &copy;
        <span id="copyright">
          <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear())) </script>
        </span> 
        {" "}WH Silverbacks
      </div>
    </div>
  </Wrapper>


const Wrapper = styled.div`
display:grid;
justify-content:center;
align-content:center;
height:100vh;
background-image: linear-gradient(
  190deg,
  hsl(33deg 13% 31%) 0%,
  hsl(77deg 8% 27%) 0%,
  hsl(151deg 9% 25%) 2%,
  hsl(185deg 12% 22%) 6%,
  hsl(192deg 11% 22%) 15%,
  hsl(168deg 7% 25%) 29%,
  hsl(117deg 3% 29%) 47%,
  hsl(52deg 3% 32%) 64%,
  hsl(70deg 3% 31%) 77%,
  hsl(141deg 4% 28%) 87%,
  hsl(177deg 8% 24%) 95%,
  hsl(198deg 12% 21%) 100%
);
margin:0;
padding:0;

img {
  width:30em;
}

`

export default Temp;