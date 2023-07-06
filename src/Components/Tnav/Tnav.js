import React from 'react'
import styled from 'styled-components';
function Tnav() {
  return (
    <div>
        <Wrapper>
          <Span>Groceries</Span>
          <Span>G-Bar</Span>
          <Span>Eletronics</Span>
          <Span>Eletronic Acessories</Span>
          <Span>Fashion</Span>
          <Span>Beauty & Health</Span>
          <Span>TV & Home Appliences</Span>
          <Span>Home & Lifestyle</Span>
          <Span>Fitness</Span>
          <Span>For Kids</Span>

        </Wrapper>

    </div>
  )
}

export default Tnav
const Wrapper = styled.div`
padding-top: 1px;
background-color: #103755;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
text-align: center;
`
const Span = styled.span`
margin:10px;
color:white;
font-family: 'Poppins', sans-serif;
cursor:pointer;
justify-content:center;
align-items:center;
text-align:center;

&:hover{
  color:#f1bb08;
}

`
