import styled from 'styled-components';

export const Menu = styled.div`
margin:0 auto;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:10vh;
background-color:#e72c07;`

export const ListPage = styled.ul`
display:Flex;
justify-content:space-evenly;
width:60vw;

@media(max-width:700px){
    display:none;
}`

export const Logo = styled.h2`
font-size:8vh;
text-transform:uppercase;
letter-spacing:-8px;
color:white;
font-family: 'Cormorant SC', serif;`

export const BtnPages = styled.button`
height:5vh;
border:none;
border-radius:5px;
min-width:5rem;`
