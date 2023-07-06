import React from 'react'
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Top pick</h1>

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
