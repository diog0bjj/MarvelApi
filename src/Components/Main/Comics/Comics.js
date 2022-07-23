import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as S from '../Styled.js';

export default function Comics(){

    const [comics, setComics] = useState([])
    const [allComics, setAllComics] = useState([])

    useEffect(()=>{
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setComics(response.data.data.results)})
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setAllComics(response.data.data.results)})
    },[]);


    function Search(e){

        if (e.target.value === "") {
            setComics(allComics)
            
            return comics
        }

        const filteredComics = allComics.filter((item)=>{
            return item.title.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setComics(filteredComics);
    };

    return(
        <S.CharactersPage>
        <S.SearchBar onChange={e=>Search(e)} placeholder="Search the marvel's comics here..."/>
        <S.CharactersContainer>
        {comics.map((item)=>(
                <S.Character>
                    <S.CharacterImage src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title}/>
                    <S.Name>
                        <h2>{item.title}</h2>
                    </S.Name>
                </S.Character>
            ))}
        </S.CharactersContainer>
        </S.CharactersPage>
    )
}