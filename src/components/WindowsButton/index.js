import React from 'react';
import {Botao} from './styles';
const WindowsButton = ({onPress, image, title}) => {

    return(
        <Botao onClick={onPress}>               
                {
                    image && <img src={image} style={{width: 20, height: 15, marginRight: 3}} alt="Logo"/>
                }
                {title}
        </Botao>
    );
}

export default WindowsButton;