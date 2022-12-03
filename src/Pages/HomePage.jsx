import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


 /**
     * Render th home page of SportSee site web
     * @return {JSX}
    **/


const HomePage = () => {
  return (
    <div>
      <Header/>
      
    <Main>
      <Sidebar/>
      <Content>
      <Title>Select USER</Title>
      <NavLink to="user/12">User 12 <br></br><br></br></NavLink>
      <NavLink to="user/18">User 18</NavLink>
      </Content>
    </Main>
    </div>
  );
};
const Main = styled.main`
display: grid;
  grid-template-columns: 8rem 1fr;
  a {
    font-size:24px;
    color:red;
    text-decoration: none;
    margin-left: 1em;
    margin-bottom:4em;
    
  }
`;
const Content = styled.section`
text-align:center`;


const Title = styled.h2`
  margin: 1em 0em;
  font-size:28px;
`;
export default HomePage;