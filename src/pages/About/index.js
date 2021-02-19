import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Container} from './styles';

const About = () => {

    useEffect(() => {
        document.title = "Sobre";
    }, []);

    return (
        <Container>
            <h1>Sobre...</h1>
            <p>Créditos pelos ícones:</p>
           
            <a target="_blank" href="https://artage.io/en">ARTAGE</a>
        </Container>
    );
}

export default About;