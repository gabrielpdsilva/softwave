import React from 'react';
import {Window, BlueDiv, Row, Title, Button, WindowBody, Text} from './styles';

const WindowsMessage = ({title, content}) => {

    return (
        <Window>
            <BlueDiv>
                <Row>
                    <Title>{title}</Title>
                    <div>
                        <Button>X</Button>
                    </div>
                </Row>
            </BlueDiv>
            <WindowBody>
                <Text>{content}</Text>
            </WindowBody>
        </Window>
    )
}

export default WindowsMessage;