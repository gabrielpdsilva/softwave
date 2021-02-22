import React from 'react';
import {Window, BlueLine, Row, Icon, Title, Button, WindowBody, Text} from './styles';
import { useNavigate } from 'react-router-dom';

// util:
// https://jdan.github.io/98.css/

const WindowsBox = (props) => {
    const navigate = useNavigate();
    
    return (
        <Window>
            <BlueLine>
                <Row>
                        <Icon src={props.logo}/>
                        <Title>{props.title}</Title>
                    <div>
                        <Button onClick={() => navigate("/")}>_</Button>
                        <Button disabled>X</Button>
                    </div>
                </Row>
            </BlueLine>
            <WindowBody>
                {props.children}
            </WindowBody>
        </Window>
    )
}

export default WindowsBox;