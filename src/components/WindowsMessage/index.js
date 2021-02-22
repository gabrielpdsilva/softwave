import React from 'react';
import {Window, BlueLine, Row, Title, Button, WindowBody, Text} from './styles';

const WindowsMessage = ({title, content}) => {

    return (
        <Window>
            <BlueLine>
                <Row>
                    <Title>{title}</Title>
                    <div>
                        <Button>X</Button>
                    </div>
                </Row>
            </BlueLine>
            <WindowBody>
                <Text>{content}</Text>
            </WindowBody>
        </Window>
    )
}

export default WindowsMessage;