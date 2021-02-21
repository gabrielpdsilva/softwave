import React, {useEffect} from 'react';
import WindowBox from '../../components/WindowBox';
import {Container
} from './styles';

// util
// https://jdan.github.io/98.css/

const About = () => {

    useEffect(() => {
        document.title = "Sobre";
    }, []);

    return (
        <Container>

            <WindowBox title="Sobre">

                <p>Créditos pelos ícones: <a target="_blank" href="https://artage.io/en">ARTAGE</a></p>
           
            </WindowBox>
            
        </Container>
    );
}

export default About;