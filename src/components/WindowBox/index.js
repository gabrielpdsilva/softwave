import React from 'react';
import {Window, BlueDiv, Row, Texto, Botao, WindowBody, Text} from './styles';

const WindowBox = (props) => {
    
    return (
        <Window>
            <BlueDiv>
                <Row>
                    <Texto>{props.title}</Texto>
                    <div>
                        <Botao>_</Botao>
                        <Botao>X</Botao>
                        <Botao>X</Botao>
                    </div>
                </Row>
            </BlueDiv>
            <WindowBody>
                {props.children}
            </WindowBody>
        </Window>
    )
}

export default WindowBox;