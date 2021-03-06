import React from 'react'; 
import styled from 'styled-components'; 

//styles 
const NavContainer = styled.div`
    top: 0; 
    height: 50px; 
    display: flex; 
    justify-content: space-between; 
   
    padding: 0px 50px 0px 50px; 
    align-items: center; 
`; 
const NavLink = styled.a`
    color: white;
    background-color: black;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none; 
    margin-right: 10px; 
    cursor:pointer; 
`; 
const Logo = styled.a`
    text-decoration: none; 
    color: white;`; 
const Menu = styled.div`
    margin-right: 50px;
`; 

const navbar = (props) => {
    return (
        <div>
            <NavContainer style={{backgroundColor: props.modeStatus ? 'Red' : 'Blue'}}> 
                <Logo href='#'>
                Todos__
                </Logo>
                <Menu>
                <NavLink>Join a Group</NavLink>
                <NavLink href="#" onClick={props.popup}>Login</NavLink>
                </Menu>
            </NavContainer>
        </div>
    )
}

export default navbar; 