import React from 'react'; 
import styled, { withTheme } from 'styled-components'; 

//styles 
const NavContainer = styled.div`
    top: 0; 
    height: 50px; 
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 50px; 
    padding: 0px 50px 0px 50px; 
    background-color: blue; 
    align-items: center; 
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
            <NavContainer> 
                <Logo href='#'>
                Todos__
                </Logo>
                <Menu>
                <a href="#" style={
                    {color: 'white', 
                    backgroundColor: 'black',
                    borderRadius: '10px',
                    padding: '7px',
                    textDecoration: 'none' }
                }>Login</a>
                </Menu>
            </NavContainer>
        </div>
    )
}

export default navbar; 