import React, {useState} from 'react';
import WindowsButton from '../WindowsButton';
import {Container, Row, Data, Imagem} from './styles';
import logo from '../../images/windows-logo.png';
import transferIcon from '../../images/transfer.png';
import helpIcon from '../../images/help.png';

import { Link } from 'react-router-dom';

// creditos pelos icones:
// https://artage.io/en/image-48133

const Footer = () => {

    const anoAtual = new Date().getFullYear();

    const handleStart = () => alert("clicou em Start");

    return (
        <footer>        
            <Container>
                <Row>
                    <WindowsButton imagem={logo} texto="Start" onPress={handleStart}/>
                    <Link to="/upar">
                        <Imagem src={transferIcon}/>
                    </Link>
                    <Link to="/sobre">
                        <Imagem src={helpIcon}/>
                    </Link>
                    <Data>{anoAtual}</Data>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;