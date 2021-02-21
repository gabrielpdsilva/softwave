import React from 'react';
import {Window, BlueDiv, Row, Texto, Botao, WindowBody, Text} from './styles';

const MessageWindow = ({title, content}) => {

    return (
        <Window>
            <BlueDiv>
                <Row>
                    <Texto>{title}</Texto>
                    <div>
                        <Botao>X</Botao>
                    </div>
                </Row>
            </BlueDiv>
            <WindowBody>
                <Text>{content}</Text>
            </WindowBody>
        </Window>
    )
}

export default MessageWindow;