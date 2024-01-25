"use client";   
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #000000;
  width: full;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
interface LeftLinksProps {
  $isopen: boolean;
}

const LeftLinks = styled.div<LeftLinksProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isopen ? 'flex' : 'none')};
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  a {
    text-decoration: none; 
    color: inherit; 
  }
`;



const LeftLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none; 
  }

  a {
    text-decoration: none; 
    color: inherit; 
  }
`;


const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 28%;
}

  @media (max-width: 768px) {
      margin: auto;
  }

  @media (min-width: 1025px) and (max-width: 1900px) {
    width: 22%;
}

@media (min-width: 1901px) and (max-width: 2560px) {
  width: 16%;
}
`;

const HamburgerIcon =  styled(FiMenu)`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;


const RightButton = styled.button`
  padding: 0.7rem 1rem;
  background-color: #03CA9B;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s, box-shadow 0.3s ease-in-out;
  display: inline-block;
  position: relative;


  &:after {
    content: '»';
    position: absolute;
    opacity: 0;  
    right: -20px;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 24px;
    padding-left:8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  } 
  

  @media (max-width: 768px) {
    display: none;
  }
`;

interface RightButtonsProps {
  $isopen: boolean;
}

const RightButtons = styled.button<RightButtonsProps>`
  padding: 0.5rem 2rem;
  background-color: #03CA9B;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;
  display: inline-block;
  position: relative;


  &:after {
    content: '»';
    position: absolute;
    opacity: 0;  
    right: -20px;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 24px;
    padding-left:8px;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  } 


  
  @media (max-width: 768px) {
    display: ${(props) => (props.$isopen ? 'block' : 'none')};
    margin-top: 1rem;
  }
  
`;

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const toggleNavbar = () => {
    setIsopen(!isopen);
  };

  return (
    <NavbarContainer>
       <HamburgerIcon onClick={toggleNavbar} />
      <LeftLink>
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
        <a href="/">Link 4</a>
      </LeftLink>

        <LeftLinks $isopen={isopen}>
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
        <a href="/">Link 4</a>
        <RightButtons $isopen={isopen}>Log in to Start</RightButtons>
      </LeftLinks>
      <Logo>FOLIO NOMICS</Logo> 
      <RightButton >Log in to Start</RightButton>
    </NavbarContainer>
  );
};

export default Navbar;
