import React from 'react';
import {Botao} from './styles';
const WindowsButton = ({onPress, imagem, texto}) => {

    return(
        <Botao onClick={onPress}>               
                {
                    imagem && <img src={imagem} style={{width: 20, height: 15, marginRight: 3}} alt="Logo"/>
                }
                {texto}
        </Botao>
    );
}

export default WindowsButton;