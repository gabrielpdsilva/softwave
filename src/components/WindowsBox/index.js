import React from 'react';
import {Window, BlueDiv, Row, Logo, Title, Button, WindowBody, Text, DisabledButton} from './styles';
import { useNavigate } from 'react-router-dom';


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
                        <DisabledButton disabled>X</DisabledButton>
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