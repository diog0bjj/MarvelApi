import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as S from '../Styled.js';

export default function Series(){

    const [series, setSeries] = useState([])
    const [allSeries, setAllSeries] = useState([])

    useEffect(()=>{
        axios.get(`http://gateway.marvel.com/v1/public/series?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setSeries(response.data.data.results)})
        axios.get(`http://gateway.marvel.com/v1/public/series?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setAllSeries(response.data.data.results)})
    },[]);

    function Search(e){

        if (e.target.value === "") {
            setSeries(allSeries)
            
            return series
        }

        const filteredSeries = allSeries.filter((item)=>{
            return item.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSeries(filteredSeries);
    };

    return(
        <S.CharactersPage>
        <S.SearchBar onChange={e=>Search(e)} placeholder="Search the marvel's series here..."/>
        <S.CharactersContainer>
        {series.map((item)=>(
                <S.Character>
                    <S.CharacterImage src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title}/>
                    <S.Name>
                        <h2>{item.title}</h2>
                    </S.Name>
                </S.Character>
            ))}
        </S.CharactersContainer>
        </S.CharactersPage>
    )}