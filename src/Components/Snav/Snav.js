import React from 'react'
import styled from 'styled-components';
function Snav() {
  return (
    <div>
        <Container>
            <Wrapper>
                <Span><img src=""/></Span>
                <input type="text" placeholder='Search here'/>
                <Span>Wish List</Span>
                <Span>Cart</Span>
            </Wrapper>

        </Container>
    </div>
  )
}

export default Snav
const Container=styled.div`
max-width: 768px;

box-sizing: border-box;
border-width: 0;
border-style: solid;
border-color: #e0e0e0;
height: 100%;
background-color:blue;


`
const Wrapper = styled.div`
background-color:green;
height: 100%;
border-color: #e0e0e0;
max-width: 768px;
border-width: 0;
border-style: solid

`
const Span = styled.span`
margin-left: 10px;
margin-right: 10px;
color: grey;
cursor: pointer;

&:hover {
  color: black;
}

`