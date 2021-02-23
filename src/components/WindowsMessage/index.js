import React from 'react';
import {Window, BlueLine, Title, Button, WindowBody, Text} from './styles';

const WindowsMessage = ({title, content}) => {

    return (
        <Window>
            <BlueLine>
                <Title>{title}</Title>
                <Button>X</Button>
            </BlueLine>
            <WindowBody>
                <Text>{content}</Text>
            </WindowBody>
        </Window>
    )
}

export default WindowsMessage;