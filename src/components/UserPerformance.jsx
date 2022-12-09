import React from "react";
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer} from "recharts";
import styled from "styled-components";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
//import {getUserPerformance} from "../Services/DataManger"
import {getUserPerformance} from "../Services/ApiManager"

/**
     * Render a RadarChart with user performance
     * @return {JSX}
    **/


function UserPerformance() {
    const {id} = useParams();
    const[UPerformance , SetUserPerformance] = useState({})

useEffect(()=>{
  getUserPerformance(id).then(data=>SetUserPerformance(data))

}, [SetUserPerformance, id])
    
console.log(UPerformance)
return ( 
    <Container>
            <ResponsiveContainer width="100%" height="100%">
				<RadarChart cx='50%' cy='50%' outerRadius='65%' data={UPerformance}>
						<PolarGrid gridType="polygon" />
						<PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }}/>
						<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
            </ResponsiveContainer>
    </Container> );
}



const Container = styled.div`
    position: relative;
	width: 258px;
	height: 263px;
	background: #282D30;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;`

    export default UserPerformance;