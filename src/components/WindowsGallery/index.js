import React, {useState} from 'react';
import {Window, Select, BlueDiv, Row, Logo, Title, Button, WindowBody, GrayDiv, Text} from './styles';

const WindowsGallery = (props) => {

    const [category, setCategory] = useState(props.category);

    const handleSelect = (event) => {
        console.log('ai')
        setCategory(event.target.value);
    }

    return (
        <Window>
            <BlueDiv>
                <Row>
                        <Logo src={props.icon}/>
                        <Title>{props.title}</Title>
                    <div>
                        <Button disabled>_</Button>
                        <Button disabled>X</Button>
                    </div>
                </Row>
            </BlueDiv>
            <GrayDiv>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Help</p>
            </GrayDiv>
            <GrayDiv>
                Categoria
                <Select value={props.category} onChange={handleSelect}>
                    <option value="cyberpunk">Cyberpunk</option>
                    <option value="doomerwave">Doomer Wave</option>
                    <option value="synthwave">Synthwave</option>
                    <option selected value="vaporwave">Vaporwave</option>
                </Select>
            </GrayDiv>
            <WindowBody>
                {props.children}
            </WindowBody>
        </Window>
    )
}

export default WindowsGallery;