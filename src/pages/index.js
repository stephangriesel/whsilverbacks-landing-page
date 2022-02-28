import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo";
import Logo from "../images/logo.png"

const IndexPage = () => (
  <Wrapper>
    <SEO title="Coming Soon" />
    <div className="brand">
      <img src={Logo} alt="logo" />
    </div>
    <div>
      <p className="custom-font sub-heading">
        stretch tents | event construction | temporary structures
      </p>
      <p className="temp">
        <span className="custom-font">under construction</span>
      </p>
      <div className="loading">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <p className="custom-font temp2">
        Get in touch
      </p>
      <p>
        <a className="custom-font temp2" href="mailto:info@silverbacks.co.uk">info@silverbacks.co.uk</a>
      </p>
      <p className="custom-font temp3">
        07956 102133 <span className="inbetween-text custom-font">OR</span> 07446 984468
      </p>
      <div className="footer-temp custom-font">
        &copy;
        <span id="copyright">
          <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear())) </script>
        </span>
        {" "}WH GROUP LTD
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
a {
  color:#FFF !important;
}
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

p {
  color:#FFF;
  text-align:center;
}

.inbetween-text {
  font-size:0.8em;
}

.sub-heading {
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.2em;
  margin-top:2em;
  margin-bottom:2em;
}

.temp {
  font-size:2.0em;
  text-transform:uppercase;
  font-weight:900;
  text-shadow: 2px 2px 16px rgba(255, 255, 255, 1);
  margin:1.5em 0;
  letter-spacing:0.1em;
  width:100%;
}

.temp2 {
  margin:0.5em;
  font-size:1.2em;
  letter-spacing:0.1em;
  text-transform:uppercase;
  font-weight:600;
}

.temp3 {
  margin:0.5em;
  font-size:1.1em;
  letter-spacing:0.1em;
}

.brand {
  display:flex;
  justify-content:center;
  img {
  width:100%;
  max-width:20em;
  margin-top:2em;
}
}

.footer-temp {
  text-align:center;
  /* margin-top:2em; */
  color:#FFF;
}

/* Loading Animation */

.loading {
  display:flex;
  justify-content:center;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (min-width: 600px) {
  height:100vh;
}
`

export const query = graphql`
  {
    img: file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
