import React, { useState } from 'react';
import fire from '../../fire.js';
import styled from "styled-components";
import FSC from '../../assets/img/Frohnauer_SC.gif';

const FuPaButton = styled.button`
  padding: 5px 12px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: black;
    border: 3px solid black;
  }

  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);



`;

const Container = styled.div`

width: 350px;
height: 500px;
border-radius: 20px;
padding: 60px;
box-sizing: border-box;
background: #ecf0f3;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
margin-top: 50px;

`;

const Logo = styled.div`

  width: 100px;
  height: 100px;
  
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;


  
`;

const Titel = styled.h2`
  color: #1E2426;
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  
  letter-spacing: 1px;
  text-align:center;
`;

const Input = styled.input`
background: #ecf0f3;
padding: 10px;
margin-top: 10px;
height: 30px;
font-size: 14px;
border-radius: 50px;
box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
outline: none;
border: none;
display: block;
width: 100%;
`;


{/* Nutzung von Hooks in React: useState */}
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).catch(() => alert("Falsches Passwort! Versuchen Sie es bitte erneut."))
  };

  const handleSignOut = () => {fire.auth().signOut()}

  return (
    <Container>
        <Logo><img src = {FSC} alt = "FSC" style = {{width: '6rem' , height: '6rem'}} ></img></Logo>
      <Titel>BadBoys</Titel>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-Mail Adresse eingeben.."
        />
        <br />
        <Input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Passwort eingeben.."
        />
        <br />
        <br />
        <FuPaButton type="submit">Sign in</FuPaButton>
        <br />
        <br />
        <FuPaButton onClick={handleSignOut}>sign out</FuPaButton> 
       
      </form>

      
      </Container>
      
  );
};
export default Login;