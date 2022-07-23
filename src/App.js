import React from "react"
import Characters from './Components/Main/Characters/Characters.js';
import Header from "./Components/Header/Header.js";
import {createGlobalStyle} from 'styled-components'
import Footer from "./Components/Footer/Footer.js";
import Comics from './Components/Main/Comics/Comics';
import Series from './Components/Main/Series/Series.js';
import Events from './Components/Main/Events/Events.js';

const GlobalStyled = createGlobalStyle`
*{
  list-style:none;
  margin:0;
  padding:0;
  box-sizing:border:box;
}`

export default function App(){
  return(
    <>
    <GlobalStyled/>
    <Header/>
    <Footer/>
    </>
  )
}