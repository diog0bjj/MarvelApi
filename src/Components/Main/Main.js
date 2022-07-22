import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as S from './styledMain';

export default function Main(){

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setCharacters(response.data.data.results)})
    },[])

    console.log(characters)
    return(
        <>
        <S.CharactersContainer>
        {characters.map((item)=>(
                <S.Character>
                    <S.Name>{item.name}</S.Name>
                    <S.CharacterImage src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title}/>
                </S.Character>
            ))}
        </S.CharactersContainer>
        </>
    )
}