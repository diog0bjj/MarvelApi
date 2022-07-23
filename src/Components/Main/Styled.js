import styled from "styled-components";

export const SearchBar = styled.input`
border-radius:10px;
border:none;
outline:none;
color:white;
background-color:red;
width:15rem;
height:2rem;
padding:0.5rem 1rem;

::Placeholder{
    color:white;
}`

export const CharactersPage = styled.div`
display:Flex;
flex-direction:column;
width:100%;
align-items:center;
padding-top:1rem;`

export const CharactersContainer = styled.div`
display:Flex;
flex-wrap:wrap;
justify-content:center;
width:90vw;
padding-top:1rem;
min-height:50vh;`

export const Character = styled.div`
height:18rem;
width:13rem;
margin:0.5rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
box-shadow: 0.2rem 0.2rem 0.2rem grey;
border-radius:5px;
transition: all 0.2s linear;

&:hover{
    transform: scale(1.05);
}`

export const Name = styled.div`
padding-top:2%;
height:18%;
font-size:1.5vh;
display:flex;
justify-content:center;
align-items:Center;`

export const CharacterImage = styled.img`
width:100%;
height:90%;
border-radius:5px 5px 0 0;
object-fit:cover;
object-position:center;
overflow:hidden;`