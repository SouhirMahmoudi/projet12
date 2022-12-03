import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg'

/**
     * Render the header of SportSee site web
     * @return {JSX}
    **/

function Header(){
return  (
<Head>
<img src={logo} alt="sportSee" aria-label="logo sportSee" />
<Nav>
  <NavLink to="/">Accueil</NavLink>
  <NavLink to="#">Profil</NavLink>
  <NavLink to="#">Réglages</NavLink>
  <NavLink to="#">Communauté</NavLink>
</Nav>
</Head>
)

}
const Head = styled.header`
position: relative;
  display: flex;
  width: 100%;
  height: 5rem;

  background: #020203;
  padding: 0 87px 0 29px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  @media (max-width: 1300px) {
    width: 120%;
  }
  img {
    width: 178px;
    margin-right: 130px;
    @media (max-width: 1300px) {
      margin-right: 70px;
    }
  }
`;

const Nav = styled.nav`
display: flex;
height: 100%;
align-items: center;
align-content: center;
justify-content: space-between;
width: 75%;
font-weight: 500;
text-align: center;
  a {
    padding: 0.5rem 2rem;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    @media (max-width: 1300px) {
      font-size: 1.25rem;
    }
  }
  `
  
;

export default Header;