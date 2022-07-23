import React from "react";
import * as S from './styledHeader';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Characters from '..//Main/Characters/Characters';
import Comics from '../Main/Comics/Comics';
import Series from '../Main/Series/Series.js';
import Events from '../Main/Events/Events.js';

export default function Header(){
    return(
        <>
       <Router>
        <S.Menu>
                <S.Logo>Marvel</S.Logo>
                <nav>
                    <S.ListPage>
                        <Link to='/'><li><S.BtnPages>Characters</S.BtnPages></li></Link>
                        <Link to='/Series'><li><S.BtnPages>Series</S.BtnPages></li></Link>
                        <Link to='/Comics'><li><S.BtnPages>Comics</S.BtnPages></li></Link>
                        <Link to='/Events'><li><S.BtnPages>Events</S.BtnPages></li></Link>
                    </S.ListPage>
                </nav>
            </S.Menu>
            <Routes>
                <Route path='/Comics' element={<Comics/>} />
                <Route path='/Series' element={<Series/>} />
                <Route path='/' element={<Characters/>} />
                <Route path='/Events' element={<Events/>} />
            </Routes>
        </Router>
        </>
    )
}