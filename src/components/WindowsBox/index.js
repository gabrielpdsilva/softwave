import React from 'react';
import {Window, BlueLine, Icon, Title, Button, WindowBody} from './styles';
import { useNavigate } from 'react-router-dom';

// util:
// https://jdan.github.io/98.css/

const WindowsBox = (props) => {
    const navigate = useNavigate();
    
    return (
        <Window>
            <BlueLine>
                <div style={{justifyContent: 'left', display: 'flex'}}>
                    <Icon src={props.icon}/>
                    <Title>{props.title}</Title>
                </div>
                <div>
                    <Button disabled>_</Button>
                    <Button disabled>X</Button>
                </div>
            </BlueLine>
            <WindowBody>
                {props.children}
            </WindowBody>
        </Window>
    )
}

export default WindowsBox;