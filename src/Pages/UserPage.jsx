import React from "react";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import KeyData from "../components/KeyData";
import ScoreChart from "../components/ScoreChart";
import DailyUserActivity from "../components/DailyUserActivity.jsx";
import UserPerformance from "../components/UserPerformance.jsx";
import UserInfos from "../components/UserInfos.jsx";
import UserAverageSessions from "../components/UserAverageSessions";
import { getUserInfos} from "../Services/ApiManager";
//import { getUserInfos} from "../Services/DataManger";
import ErrorPage from "./ErrorPage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

/**
     * Render the dashboard
     * @return {JSX}
    **/

 
function UserPage(){
    const {id} = useParams();
const[UInfos , SetUserInfos] = useState({userInfos:{}, keyData:{}})

useEffect(()=>{
  getUserInfos(id).then(data=>SetUserInfos(data))

},[SetUserInfos, id])

    console.log(UInfos)

    return UInfos === undefined ? (
      <ErrorPage />
      
    )
      
    
   : ( 
    <div>
    <Header/>
<DashboardContainer>
<Sidebar/>
        <MainContent>
            <UserInfos name={UInfos.userInfos.firstName} />
          <ContentGrid>
            <ChartsGrid>
              <MainChart>
               <DailyUserActivity  />
              </MainChart>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart/>
            </ChartsGrid>

          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${UInfos.keyData.calorieCount}kCal`}
              text="Calories"
            />
            <KeyData
              icon={proteinsIcon}
              info={`${UInfos.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${UInfos.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${UInfos.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
          </ContentGrid>
        </MainContent>
      </DashboardContainer>
      </div>
  );
};

const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 8rem 1fr;
  width:100%;   
  aside{
    margin-left:50px;
  }
`;

const MainContent = styled.section`
  padding: 3rem 5rem;
  @media (max-width: 1340px) {
    padding: 1.5rem 2rem;
  }
`;



const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 1300px) {
    gap: 18.5rem;
  }
`;

const ChartsGrid = styled.div`
  grid-column: 1/4;
  display: grid;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 5rem;
  @media (max-width: 1300px) {
    grid-template: 18rem 14rem / repeat(3, 1fr);
    gap: 5rem;
    width:70%;
  }

`;

const MainChart = styled.div`
  grid-column: 1/4;
  margin-bottom: -78px;
  @media (max-width: 1340px) {
   
  }
`;

/*const Main = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 2%;
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 835px;
    flex-direction: column;
    margin: auto;
    margin-left: 0;
    @media (max-width: 1208px) {
      flex-direction: row;
      margin: auto 0;
      margin-right: 6em;
    }
    > div {
      margin: 20px 5px;
    }
  }
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  justify-content: space-between;
`;*/

export default UserPage;
/*<Main>  
    
      <UserInfos name={UInfos.userInfos.firstName} />
        <Content>
          <section>
            <DailyUserActivity  />
            <Charts>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart/>
            </Charts>
          </section> 
          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${UInfos.keyData.calorieCount}kCal`}
              text="Calories"
            />
            <KeyData
              icon={proteinsIcon}
              info={`${UInfos.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${UInfos.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${UInfos.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
        </Content>
    </Main>*/