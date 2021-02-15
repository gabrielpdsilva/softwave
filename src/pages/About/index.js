import React, {useEffect} from 'react';
import {Container} from './styles';

const About = () => {

    useEffect(() => {
        document.title = "Sobre";
    }, []);

    return (
        <Container>
            <h1>Sobre...</h1>
        </Container>
    );
}

export default About;