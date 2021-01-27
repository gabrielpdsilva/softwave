import React from 'react';
import {Caixa} from './styles';

const Frame = ({width, height, imagem, nomeImagem}) => {

    return (
        <Caixa width={width} height={height}>
            {
                imagem && <img src={imagem} style = {{width: width, height: height}} alt="Logo"/>
            }
            {
                nomeImagem
            }
        </Caixa>
    )
        
}

export default Frame;