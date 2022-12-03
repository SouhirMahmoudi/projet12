import React from "react";
import iconMeditation from "../assets/iconMeditation.svg";
import iconVelo from "../assets/iconVelo.svg";
import iconSwim from "../assets/iconSwim.svg";
import iconMusculation from "../assets/iconMusculation.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


/**
     * Render the sideBar of SportSee site web
     * @return {JSX}
    **/
   
function Sidebar () {
  return (
    <Container>
        <Wrapper>
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwim} alt="Natation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconVelo} alt="Velo" />
          </NavLink>
          <NavLink to="#">
            <img src={iconMusculation} alt="Musculation" />
          </NavLink>
        </Wrapper>
        <NavText>Copyright, SportSee 2020</NavText>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows:6.5fr 2fr;
  color: white;
  width:117px;
  height:100%;
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1300px) {
    height:110%;

  }
`;



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  a{
    display:flex;
    justify-content: center;
  }
  img {
    padding: 0.5rem;
  }
`;

const NavText = styled.p`
display: flex;
align-items: center;
padding: 3rem 0;
font-size: 0.8rem;
writing-mode: vertical-lr;
transform: rotate(180deg);
@media (max-width: 1300px) {
  padding: 2rem;
}
`;

export default Sidebar;