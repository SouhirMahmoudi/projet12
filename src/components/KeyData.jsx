import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 


/** display icon with user infos 
 * @param  {string} icon
 * @param  {string} info
 * @param  {string} text
 */
function KeyData({icon,info,text}) {
    return (  
    <Wrapper>
        <img src={icon} alt="calories icon"/>
        <Infos>
            <InfosData>{info}</InfosData>
            <InfosText>{text}</InfosText>
        </Infos>
    </Wrapper> );
}


const Wrapper = styled.div`
    display:flex;
    padding:2rem;
    @media (max-width: 1300px) {
        padding-left:1rem
    }
`
    
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`
KeyData.propTypes = {
  info: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
}

export default KeyData;