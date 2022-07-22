import React from "react"
import Main from './Components/Main/Main.js';
import Header from "./Components/Header/Header.js";
import {createGlobalStyle} from 'styled-components'
import Footer from "./Components/Footer/Footer.js";

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
    <Main/>
    <Footer/>
    </>
  )
}