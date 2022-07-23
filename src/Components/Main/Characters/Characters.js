import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as S from '../Styled.js';

export default function Main(){

    const [characters, setCharacters] = useState([])
    const [allCharacters, setAllCharacters]=useState([])

    useEffect(()=>{
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setCharacters(response.data.data.results)})
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setAllCharacters(response.data.data.results)})
    },[])

    function Search(e){

        if (e.target.value === "") {
            setCharacters(allCharacters)
            
            return characters
        }

        const filteredCharacters = allCharacters.filter((item)=>{
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true
              };
        })
        setCharacters(filteredCharacters);
    };

    return(
        <S.CharactersPage>
        <S.SearchBar onChange={e=>Search(e)} placeholder="Search the marvel's characteres here"/>
        <S.CharactersContainer>
        {characters.map((item)=>(
                <S.Character>
                    <S.CharacterImage src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title}/>
                    <S.Name>
                        <h2>{item.name}</h2>
                    </S.Name>
                </S.Character>
            ))}
        </S.CharactersContainer>
        </S.CharactersPage>
    )
}