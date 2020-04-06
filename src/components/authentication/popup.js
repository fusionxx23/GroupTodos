import React from 'react';
import styled from 'styled-components'; 

//styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 50px;
    background-color: #fff;
    border-radius: 20px;
    width: 25em;
    height: 40em;
    background-color: #fcfcfc; 
    margin: auto; 
`; 
const Items = styled.div`
    display: flex;
    flex-direction: column;
`; 
const Input = styled.input`
    margin-bottom: 30px;
    padding: 2px 0px;
    padding-bottom: 5px;
    width: 250px;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1.5px solid;
    border-bottom-color: grey;
    font-weight: 700;
    color: #585858;
    opacity: 0.55;
`; 
const Title = styled.h2`
    margin-bottom: 50px; 
    letter-spacing: 5px; 
    text-align:center; 
    opacity:0.5;     
`; 
const Button = styled.button`
    padding: 20px 30px;
    margin-top: 30px;
    outline: none;
    border: none;
    font-size: medium;
    font-weight: 600;
    letter-spacing: 5px;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(6, 215, 152, 1) 0%,
    rgba(32, 204, 158, 1) 30%,
    rgba(135, 219, 213, 1) 70%
    );
    color: grey;
    &:active {
        transform: translateY(2px); 
    }
`; 
const Sign = styled.a`
    margin-top: 4em;
    text-align: center;
    letter-spacing: 5px;
    cursor: pointer;
    color: rgb(11, 194, 142);
    font-weight: bolder;
    text-decoration: none;
    &:active {transform: translateY(2px)}
`; 

const Popup = () => {
    return (
        <Container>
            <Title>Login</Title>
            <Items>
                <Input type="text" placeholder="Username"/>
                <Input type="password"  placeholder="Password" />
                <Button>Send</Button>
                <Sign type="submit" href="#">Sign Up</Sign>
            </Items>
        </Container>
    )
}

export default Popup; 