import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 


/**Render the userName
* @param {string} name
*/

function UserInfos({name}) {

    return (  
          <Head>
            <h1>Bonjour <Name>{name}</Name></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </Head>
    );
}

export default UserInfos;

const Head = styled.header`
  margin-bottom: 40px;
  @media (max-width: 1203px) {
			margin-left: 2em;
		}
  h1 {
    font-weight: 600;
    font-size:48px;
    margin-bottom:40px;
  }
`;

const Name = styled.span`
  color: #ff0000;
`;

UserInfos.propTypes = {
	name: PropTypes.string,
};