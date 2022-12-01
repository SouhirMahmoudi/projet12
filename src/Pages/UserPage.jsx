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
import { getUserInfos} from "../Services/DataManger";
import ErrorPage from "./ErrorPage";

/**Render the dashboard
 */

 
function UserPage(){
    const {id} = useParams();
const[UInfos , SetUserInfos] = useState({userInfos:{}, keyData:{}})

useEffect(()=>{
  getUserInfos(id).then(data=>SetUserInfos(data))

},[SetUserInfos, id])




/*const[UAverageSessions , SetUserAverageSessions] = useState({})

useEffect(()=>{
  getUserAVerageSessions(id).then(data=>SetUserAverageSessions(data))

}, [SetUserAverageSessions, id])*/
/*const UserActivityData = getUserActivity(id);
    const UserPerformanceData = getUserPerformance(id);
    const UserAverageSessionsData = getUserAVerageSessions(id);
    const UserData = getUserInfos(id);
    console.log(UserActivityData,UserPerformanceData, UserAverageSessionsData,UserData)*/
    console.log(UInfos)

    return UInfos === undefined ? (
      <ErrorPage />
      
    )
      
    
   : ( 
    <Main>  
    <Container> 
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
      </Container> 
    </Main>
  );
};


const Main = styled.main`
 
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 2%;
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
`;

export default UserPage;
