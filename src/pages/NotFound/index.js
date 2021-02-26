import React, {useEffect} from 'react';
import {Title, Text, Container} from './styles';
import WindowsBox from '../../components/WindowsBox';

const NotFound = () => {

    useEffect(() => {
        document.title = "404 Not Found";
    }, []);

    return (
        <Container>
            <WindowsBox title="Erro">            
                <Title>404</Title>
                <Text>Essa página não pôde ser encontrada.</Text>
            </WindowsBox>
        </Container>
    );
}

export default NotFound;