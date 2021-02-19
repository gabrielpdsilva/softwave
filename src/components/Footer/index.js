import React, {useState} from 'react';
import WindowsButton from '../WindowsButton';
import {Container, Row, Data} from './styles';
import logo from '../../images/windows-logo.png';
import transferIcon from '../../images/transfer.png';
import helpIcon from '../../images/help.png';

// creditos pelos icones:
// https://artage.io/en/image-48133

const Footer = () => {

    const anoAtual = new Date().getFullYear();
    const [data, setData] = useState(anoAtual);

    const handleStart = () => alert("clicou em Start");

    return (
        <footer>        
            <Container>
                <Row>
                    <WindowsButton imagem={logo} texto="Start" onPress={handleStart}/>
                    <img src={transferIcon}/>
                    <img src={helpIcon}/>
                    <Data>{data}</Data>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;