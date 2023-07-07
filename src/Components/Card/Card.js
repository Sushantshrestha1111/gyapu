import React from 'react'
import styled from 'styled-components';


function Card() {
  const handleAddToCart = () => {
    // Add your logic here for the 'Add to cart' functionality
    console.log("Add to cart clicked");
    // Perform any other actions as needed
  };
  
  return (
    <div>
        <Container>
          <AddToCardButton onClick={handleAddToCart}> 
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