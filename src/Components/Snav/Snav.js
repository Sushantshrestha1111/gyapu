import React,{useState,useEffect} from  'react';
import styled from 'styled-components';
import { AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";


function Snav() {
  const [cartCount,setCount]=useState(5);
   
  function increment() {
    setCount(preavCount => preavCount+1)
    console.log('Incremented');
}
  return (
    <div>
      <Logo src="/images/gyapulogo.svg"></Logo>
            <Wrapper>
                
                <Items>
                  <Span><StyledInput type="text" placeholder='I am searching for'/>
                <SearchIcon><AiOutlineSearch/></SearchIcon>
                
                </Span>
                <Span><AiOutlineHeart/> Wish List</Span>
                <Span><AiOutlineShoppingCart/> Cart
                <Cartcircle>{cartCount}</Cartcircle>
                <button onClick={increment}>sdfsdf</button>
                </Span></Items>
                <Span><FaUserAlt/></Span>
                
            </Wrapper>

    </div>
  )
}
 export function increment() {
  // Function implementation
};

export default Snav
const Container=styled.div`
width:100%;




border-width: 0;
border-style: solid;
border-color: #e0e0e0;




`
const Cartcircle=styled.div`

background-color: yellow;
color:black;
border-radius:50%;
height:25px;
width:25px;


`

const Wrapper = styled.div`
display: flex;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
border-color: #e0e0e0;

position: relative;


border-width: 0;
border-style: solid

`
const StyledInput = styled.input`
  height: 30px; 
  width: 700px; 
  border-radius:5px;
  border: 1px solid ;
 

 
`;
const Items = styled.div`
display: flex;
margin-left: 250px;`


const Span = styled.span`
margin-left: 10px;
margin-right: 10px;
display: flex;

height: 35px;



color: grey;
cursor: pointer;
align-items:center;
just-content: center;



position:relative;

&:hover {
  color: black;
}

`
const Logo = styled.img`
display:inline-block;
max-height:50px;
position:absolute;
left:0;
margin-left:90px;
margin-top:10px;
cursor:pointer;



`
const SearchIcon= styled.div`

background-color:#f1bb08;
position:absolute;
right:0;
margin-left:2px;
height:29px;
padding-top:10px;
border:none;

border-radius:10px;
width:50px;
position:absolute;`