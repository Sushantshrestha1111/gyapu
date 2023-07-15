import React, { useState } from 'react';
import styled from 'styled-components';
import { increment } from '../Snav/Snav';

function Tnav() {
  const [drop, setDrop] = useState(false);
  function activate(){
    setDrop(!drop)
  }

  

  return (
    <div>
      <Wrapper>
        <Span onClick={increment}>Groceries</Span>
        <Span onMouseEnter={activate} onMouseLeave={activate}>
          G-Bar{drop && (
            <Dropdown>
              {/* Add your dropdown menu content here */}
              <DropdownItem>Dropdown Item 1</DropdownItem>
              <DropdownItem>Dropdown Item 2</DropdownItem>
              <DropdownItem>Dropdown Item 3</DropdownItem>
            </Dropdown>
          )}
          
        </Span>
        <Span onMouseEnter={activate} onMouseLeave={activate}>Eletronics
        
        {drop &&(
        <Dropdown>
          <DropdownItem>laptop</DropdownItem>
          <DropdownItem>laptop</DropdownItem>
          <DropdownItem>laptop</DropdownItem>
          <DropdownItem>laptop</DropdownItem>
          <DropdownItem>laptop</DropdownItem>
          
         
        </Dropdown>)}
        </Span>
        <Span>Eletronic Acessories</Span>
        <Span>Fashion</Span>
        <Span>Beauty & Health</Span>
        <Span>TV & Home Appliences</Span>
        <Span>Home & Lifestyle</Span>
        <Span>Fitness</Span>
        <Span>For Kids</Span>
      </Wrapper>
    </div>
  );
}

export default Tnav;

const Wrapper = styled.div`
  padding-top: 1px;
  background-color: #103755;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Span = styled.span`
  margin: 10px;
  color: white;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  &:hover {
    color: #f1bb08;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  width: 150px;
`;

const DropdownItem = styled.span`
  color: grey;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    color: #f1bb08;
  }
`;
