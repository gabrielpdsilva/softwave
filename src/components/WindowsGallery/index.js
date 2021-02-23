import React from 'react';
import {Window, Select, BlueLine, Icon, Title, Button, WindowBody, GrayDiv, Text} from './styles';

const WindowsGallery = (props) => {

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
            <GrayDiv>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Help</p>
            </GrayDiv>
            <GrayDiv>
                Categoria
                <Select value={props.category} onChange={props.onPress}>
                    <option value="cyberpunk">Cyberpunk</option>
                    <option value="doomerwave">Doomer Wave</option>
                    <option value="synthwave">Synthwave</option>
                    <option defaultValue value="vaporwave">Vaporwave</option>
                </Select>
            </GrayDiv>
            <WindowBody>
                {props.children}
            </WindowBody>
        </Window>
    )
}

export default WindowsGallery;