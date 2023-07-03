import React from 'react';
import Tog from '../tog/Tog';
import styled from 'styled-components';

function Fnav() {
  return (
    <div>
      <Wrapper>
        <First>
          <Span>asdfsdaf</Span>
          <Span>asdfsdaf</Span>
        </First>
        <Second>
          <Span>
            Get Reward
          </Span>
          <Span>Sell all your projects</Span>
          <Span>Login/Register</Span>
          <CustomSpan>
            <Tog />
          </CustomSpan>
        </Second>
      </Wrapper>
    </div>
  );
}

export default Fnav;

const Wrapper = styled.div`
  height: 30px;
  border-bottom: 1px solid;
  border-color:grey;
 
`;

const First = styled.div`
  display: flex;
`;

const Second = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;

const Span = styled.span`
  margin-left: 15px;
  margin-right: 25px;
  cursor: pointer;
  color: grey;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.75rem;

  &:hover {
    color: black;
  }
`;

const CustomSpan = styled(Span)`
  display: flex;
  align-items: center;
`;
const CustomizedTog = styled(Tog)`
  
  width: 16px;
  height: 16px;
  margin-left: 15px;
`;
