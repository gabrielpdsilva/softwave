import React from 'react';
import {Caixa} from './styles';

const Frame = ({width, height, imagem}) => {

    return (
        <Caixa width={width} height={height}>
            <img src={imagem} style = {{width: width, height: height}} alt="Logo"/>
        </Caixa>
    )
}

export default Frame;