import React, {useEffect} from 'react';
import WindowsBox from '../../components/WindowsBox';
import {Container} from './styles';
import helpIcon from '../../images/help.png';

// util
// https://jdan.github.io/98.css/

const About = () => {

    useEffect(() => {
        document.title = "Sobre";
    }, []);

    return (
        <Container>

            <WindowsBox logo={helpIcon} title="Sobre">

                <p>Créditos pelos ícones: <a target="_blank" href="https://artage.io/en">ARTAGE</a></p>
           
            </WindowsBox>
            
        </Container>
    );
}

export default About;