import React from "react";
import * as S from './styledHeader';

export default function Header(){
    return(
        <>
        <S.Menu>
            <h2>Marvel</h2>
            <nav>
                <ul>
                    <li><input placeholder="Search the marvel character here"/></li>
                </ul>
            </nav>
        </S.Menu>
        </>
    )
}