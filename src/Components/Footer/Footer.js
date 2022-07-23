import React from "react";
import * as S from './styledFooter';

import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

export default function Footer(){
    return(
        <S.Container>
            <div>
                <nav>
                <S.SocialMidias>
                    <a href="https://instagram.com/ggsantz"><li><FaInstagram style={{fill:'#e72c07'}}  size={30}/></li></a>
                    <a href = "https://www.linkedin.com/in/diogo-sales-368b64224"><li><FaLinkedinIn style={{fill:'#e72c07'}} size={30}/></li></a>
                    <a href="mailto:dsales289@poli.ufrj.br"><li><FaMailBulk style={{fill:'#e72c07'}} size={30}/></li></a>
                    <a href="https://github.com/diog0bjj"><li><FaGithub style={{fill:'#e72c07'}} size={30}/></li></a>
                </S.SocialMidias>
                </nav>
            </div>
        <h6>Pagina desenvolvida por Diogo Sales</h6>
        </S.Container>
    )
}