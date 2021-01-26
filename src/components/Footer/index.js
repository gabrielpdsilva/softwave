import React from 'react';
import WindowsButton from '../WindowsButton';
import {Container} from './styles';
import logo from '../../windows-logo.png';

const Footer = () => { 
    
    const handleStart = (mensagem) => alert("clicou");

    return (
        <Container>
            <WindowsButton imagem={logo} texto="Start" onPress={() => handleStart("minha mensagem")}/>
        </Container>
    );
}

export default Footer;