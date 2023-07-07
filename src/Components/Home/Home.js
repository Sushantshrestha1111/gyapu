import React from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';

export default function Home() {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Top pick</h1>
                <Card/>
                <Card/>
                

            </Wrapper>
        </Container>
        
    </div>
  )
}
const Container=styled.div`
h1{
    color:grey;
    cursor:pointer;
    text-align:left;
    margin-left:35px;
}

`
const Wrapper=styled.div`

`
