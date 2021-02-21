import React from 'react';
import {Window, BlueDiv, Row, Logo, Title, Button, WindowBody, Text} from './styles';
import { useNavigate } from 'react-router-dom';

// util:
// https://jdan.github.io/98.css/

const WindowsBox = (props) => {
    const navigate = useNavigate();
    
    return (
        <Window>
            <BlueDiv>
                <Row>
                        <Logo src={props.logo}/>
                        <Title>{props.title}</Title>
                    <div>
                        <Button onClick={() => navigate("/")}>_</Button>
                        <Button disabled>X</Button>
                    </div>
                </Row>
            </BlueDiv>
            <WindowBody>
                {props.children}
            </WindowBody>
        </Window>
    )
}

export default WindowsBox;