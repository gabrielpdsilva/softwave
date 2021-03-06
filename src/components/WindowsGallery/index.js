import React from 'react';
import {
    Window,
    FooterGallery,
    Select,
    BlueLine,
    Text,
    Icon,
    Title,
    Button,
    WindowBody,
    GrayDiv,
    DivIcon
} from './styles';

const WindowsGallery = (props) => {

    return (
        <Window>
            <BlueLine>
                <DivIcon>
                    <Icon src={props.icon}/>
                    <Title>{props.title}</Title>
                </DivIcon>
                <div>
                    <Button disabled>_</Button>
                    <Button disabled>X</Button>
                </div>
            </BlueLine>
            <GrayDiv>
                <Text>File</Text>
                <Text>Edit</Text>
                <Text>View</Text>
                <Text>Help</Text>
            </GrayDiv>
            <GrayDiv>
                <Text>Categoria</Text>
                <Select value={props.category} onChange={props.onClick}>
                    <option value="anime">80's animes</option>
                    <option value="cyberpunk">Cyberpunk</option>
                    <option value="doomerwave">Doomer Wave</option>
                    <option value="synthwave">Synthwave</option>
                    <option defaultValue value="vaporwave">Vaporwave</option>
                </Select>
            </GrayDiv>
            <WindowBody>
                {props.children}
            </WindowBody>
            <FooterGallery>
                <Text>Object(s) found</Text>
            </FooterGallery>
        </Window>
    )
}

export default WindowsGallery;