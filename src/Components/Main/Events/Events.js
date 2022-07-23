import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as S from '../Styled.js';

export default function Events(){

    const [events, setEvents] = useState([])
    const [allEvents, setAllEvents] = useState([])

    useEffect(()=>{
        axios.get(`http://gateway.marvel.com/v1/public/events?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setEvents(response.data.data.results)})
        axios.get(`http://gateway.marvel.com/v1/public/events?ts=1658467852&apikey=a235cab1739de0e73faa2be2d65f815a&hash=b582cb688982c7c8aee9d32ffc0727cb`).then((response)=>{setAllEvents(response.data.data.results)})
    },[]);

    function Search(e){

        if (e.target.value === "") {
            setEvents(allEvents)
            
            return events
        }

        const filteredEvents = allEvents.filter((item)=>{
            if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true
              };
        })
        setEvents(filteredEvents);
    };

    console.log(events)
    return(
        <S.CharactersPage>
        <S.SearchBar onChange={e=>Search(e)} placeholder="Search the marvel's events here..."/>
        <S.CharactersContainer>
        {events.map((item)=>(
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
    