import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Container,
    Window,
    BlueDiv,
    Texto,
    Row,
    Botao,
    WindowBody,
} from './styles';

// util
// https://jdan.github.io/98.css/

const About = () => {

    useEffect(() => {
        document.title = "Sobre";
    }, []);

    return (
        <Container>
            <Window>
                <BlueDiv>
                    <Row>
                        <Texto>Título da Janela</Texto>
                        <div>
                            <Botao>X</Botao>
                            <Botao>X</Botao>
                            <Botao>X</Botao>
                        </div>
                    </Row>
                </BlueDiv>
                <WindowBody>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </WindowBody>
            </Window>
            <h1>Sobre...</h1>
            <p>Créditos pelos ícones:</p>
           
            <a target="_blank" href="https://artage.io/en">ARTAGE</a>
        </Container>
    );
}

export default About;