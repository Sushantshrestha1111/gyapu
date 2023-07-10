import React from 'react'
import styled from 'styled-components';
function Dropdown() {
  return (
    <div>
        <Drop>
            <span>sadfasd</span>
            <span>sadfasd</span>
            <span>sadfasd</span>
            <span>sadfasd</span>
            <span>sadfasd</span>

        </Drop>

    </div>
  )
}

export default Dropdown

const Drop = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 200px;
  text-align: left;
  width: auto;
  background-color:grey;
`;
