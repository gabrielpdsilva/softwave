import React, {useState} from 'react';
import WindowsButton from '../WindowsButton';
import {Container, Row, Data} from './styles';
import logo from '../../windows-logo.png';

const Footer = () => {

    let anoAtual = new Date().getFullYear();
    const [data, setData] = useState(anoAtual);

    const handleStart = () => alert("clicou em Start");

    return (
        <footer>        
            <Container>
                <Row>
                    <WindowsButton imagem={logo} texto="Start" onPress={handleStart}/>
                    <Data>{data}</Data>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;