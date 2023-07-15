import React from 'react'
import styled from 'styled-components';
import {increment} from"../Snav/Snav"
import { ddd } from '../Counter/Counter';



function Card() {
  
  
  return (
    <div>
        <Container>
          <AddToCardButton onClick={ddd}> 
            Add to cart
          </AddToCardButton>

        </Container>
    </div>
  )
}

export default Card

const Container=styled.div`
background-color:grey;
color:black;
height:300px;
width:250px;
margin:5px;
border-radius:10px;

`
const AddToCardButton=styled.button`
height:50px;
width:100%;
background-color:yellow;
border-radius:10px;
cursor:pointer;

`