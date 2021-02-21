import React from 'react';
import {Window, BlueDiv, Row, Texto, Botao, WindowBody, Text, DisabledButton} from './styles';
import { useNavigate } from 'react-router-dom';

const WindowBox = (props) => {
    const navigate = useNavigate();
    
    return (
        <Window>
            <BlueDiv>
                <Row>
                    <Texto>{props.title}</Texto>
                    <div>
                        <Botao onClick={() => navigate("/")}>_</Botao>
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

export default WindowBox;