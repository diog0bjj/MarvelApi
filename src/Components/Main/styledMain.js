import styled from "styled-components";

export const CharactersContainer = styled.div`
border:solid black;
display:Flex;
flex-wrap:wrap;
justify-content:center;`

export const Character = styled.div`
height:16rem;
width:14rem;
margin:0.5rem;
border:solid orange;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding-top:1%;`

export const Name = styled.h2`
height:14%;
font-size:2.5vh;`

export const CharacterImage = styled.img`
width:100%;
height:85%;
border:1px solid orange;`
