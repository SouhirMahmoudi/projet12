import React from "react";
import styled from "styled-components";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionsToolTip from "../components/SessionToolTip.jsx"
import { getUserAVerageSessions } from '../Services/DataManger'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserAverageSessions() {
  const { id } = useParams();

  const [UAverageSessions, SetUserAverageSessions] = useState({})

  useEffect(() => {
    getUserAVerageSessions(id).then(data => SetUserAverageSessions(data))

  }, [SetUserAverageSessions, id])

  
    return (
      <Container>
        <Title>Durée moyenne des sessions</Title>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={UAverageSessions}>
            <XAxis
              type="category"
              dataKey="day"
              tickLine={false}
              tick={{ fontSize: 14, stroke: "rgba(255, 255, 255, 0.7)" }}
            />
            <YAxis
              dataKey="sessionLength"
              domain={[0, "dataMax + 30"]}
              hide={true}
            />
            <Tooltip content={<SessionsToolTip />} 
             cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 79,
            }}
          />
            <Line
              type="monotone"
              padding={{ left: 10 }}
              dataKey="sessionLength"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: "rgba(255,255,255, 0.6)",
                strokeWidth: 10,
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    );
  }


  const Container = styled.div`
    position: relative;
    width: 258px;
    height: 263px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ff0000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
  `;

  const Title = styled.h2`
    position: absolute;
    font-weight: 500;
    font-size: 15px;
    padding: 29px 34px 0 34px;
    color: rgba(255, 255, 255, 0.7);
  `;

  export default UserAverageSessions;
  //  ligne 30