import { BrowserRouter, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import Category from "./components/Category";
import styled, { keyframes } from "styled-components";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <AnimatedRocket src="/chef.png" alt="RocketLogo" />
          <Logo to={"/"}>YumTastic</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
    
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: verdana, cursive;
  margin-left:0.3rem;
`;

const Nav = styled.div`
  padding-top: 4rem;
  padding-bottom:1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const rocketAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  
`;

const AnimatedRocket = styled.img`
  width: 30px;
  height: auto;
  animation: ${rocketAnimation} 2s ease-in-out infinite;
`;

export default App;
