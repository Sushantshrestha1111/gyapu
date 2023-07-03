import React from 'react'
import styled from 'styled-components';
function Snav() {
  return (
    <div>
        <Container>
            <Wrapper>
                <Span><img src=""/></Span>
                <input type="text" placeholder='Search here'/>
                <span>Wish List</span>
                <span>Cart</span>
            </Wrapper>

        </Container>
    </div>
  )
}

export default Snav
const Container=styled.div`
max-width: 768px;
color: ;


`