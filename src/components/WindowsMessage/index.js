import React from 'react';
import {Window, BlueLine, Title, Button, WindowBody, Text} from './styles';

const WindowsMessage = ({title, content, onClick}) => {

    return (
        <Window>
            <BlueLine>
                <Title>{title}</Title>
                <Button onClick={onClick}>X</Button>
            </BlueLine>
            <WindowBody>
                <Text>{content}</Text>
            </WindowBody>
        </Window>
    )
}

export default WindowsMessage;