import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'



    /**
     * Render an error page
     * @return {JSX}
    **/

function ErrorPage() {
  return (
    <div>
      <Header />
      <Main>
      <Sidebar />
      <Content>
        <Title>404</Title>
        <p> Oups ! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retourner sur la page d’accueil</Link>
        </Content>
      </Main>
    </div>
  )
}

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
 
  text-align: center;
`;
const Title = styled.h2`
font-size:4rem;

`
export default ErrorPage;