import React from "react";
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer} from "recharts";
import ActivityTooltip from '../components/ActivityTooltip.jsx'
import PropTypes from 'prop-types'; 
import { useState, useEffect } from "react";
import {getUserActivity} from '../Services/DataManger'
import { useParams } from "react-router-dom";


function DailyUserActivity() {
    const {id} = useParams();
    const[UActivity , SetUserActivity] = useState({sessions:{}})

    useEffect(()=>{
      getUserActivity(id).then(data=>SetUserActivity(data))
    
    },[SetUserActivity, id ])
    
    /**
     * Render a BarChart with user activity Data 
    **/

     //format data.day
   for (let i = 0 ; i < UActivity.sessions.length ; i ++){
    UActivity.sessions[i].day = i + 1;
   }
   console.log(UActivity.sessions, UActivity.sessions.length)

//console.log(Data.length)
   
    return (
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <Legend>
                    <Info>
                        <Icon color='#282D30' />
                        <Text>Poids (kg)</Text>
                    </Info>
                    <Info>
                        <Icon color='#E60000' />
                        <Text>Calories brûlées (kCal)</Text>
                    </Info>
                </Legend>
            </Head>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={UActivity.sessions}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#dedede"
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke="#9b9eac"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke="#9b9eac"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill="#2b2d30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill="#ff0101"
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            content={<ActivityTooltip />}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
        </Wrapper>
    );
}
//  ligne 44 <Tooltip content={<ActivityTooltip />} />
//import ActivityTooltip from '../components/ActivityTooltip.js';

const Wrapper = styled.div`
    margin-bottom: 3em;
	height: 320px;
	border-radius: 5px;
	background-color: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	padding: 25px;
	
	@media (max-width: 1025px) {
      padding-left:0;
    }
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
	`

const Title = styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`

const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`

const Legend = styled.div`
	display: flex;
`

const Info = styled.div`
    display: flex;
    align-items:center;
`
DailyUserActivity.propTypes={
    data: PropTypes.array
}
export default DailyUserActivity;
